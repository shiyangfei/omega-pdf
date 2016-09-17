/**
 * Created by sfei on 8/11/2016.
 */

var app = angular.module('template');
app.controller('MainController', function ($scope, MainService) {
    var me = this;
    $scope.updateData = function (data) {
        $scope.report = processData(data);
    };

    function processData(raw) {
        var processed;
        processed = angular.copy(raw);
        processOmega3IndexText(processed);
        processTransFatIndexText(processed);
        processIndexPosition(processed);
        return processed;
    }

    function processOmega3IndexText(data) {
        data['omega3_index_summary_text'] = MainService.getOmega3IndexSummaryText(data['omega3_index']);
        data['omega3_index_detail_text'] = MainService.getOmega3IndexDetailText(data['omega3_index']);
    }

    function processTransFatIndexText(data) {
        data['trans_fat_index_summary_text'] = MainService.getTransFatIndexSummaryText(data['trans_fat_index']);
        data['trans_fat_index_detail_text'] = MainService.getTransFatIndexDetailText(data['trans_fat_index']);
    }

    function processIndexPosition(data) {
        var minPos = 10,
            maxPos = 90,
            omega3Pos,
            transFatPos,
            omega3RangeLow = 2,
            omega3RangeHigh = 12,
            transFatRangeLow = 0,
            transFatRangeHigh = 2.5,
            omega3_index = parseFloat(data.omega3_index),
            trans_fat_index = parseFloat(data.trans_fat_index);
        if (omega3_index < omega3RangeLow) {
            omega3Pos = minPos;
        } else if (omega3_index > omega3RangeHigh) {
            omega3Pos = maxPos;
        } else {
            omega3Pos = (maxPos * omega3_index - maxPos * omega3RangeLow + minPos * omega3RangeHigh - minPos * omega3_index) / (omega3RangeHigh - omega3RangeLow);
        }

        if (trans_fat_index < transFatRangeLow) {
            transFatPos = minPos;
        } else if (trans_fat_index > transFatRangeHigh) {
            transFatPos = maxPos;
        } else {
            transFatPos = (maxPos * trans_fat_index - maxPos * transFatRangeLow + minPos * transFatRangeHigh - minPos * trans_fat_index) / (transFatRangeHigh - transFatRangeLow);
        }
        $scope.omega_3_index_position_style = {"padding-left": omega3Pos + "%"};
        $scope.trans_fat_index_position_style = {"padding-left": transFatPos + "%"};
    }
});