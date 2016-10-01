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
        processN6N3Text(processed);
        processTransFatIndexText(processed);
        processIndexPosition(processed);
        return processed;
    }

    function processOmega3IndexText(data) {
        data['omega3_index_summary_text'] = MainService.getOmega3IndexSummaryText(data['omega3_index']);
        data['omega3_index_detail_text'] = MainService.getOmega3IndexDetailText(data['omega3_index']);
    }
    
    function processN6N3Text(data) {
        data['n6_n3_summary_text'] = MainService.getN6N3SummaryText(data['n6_n3']);
        data['n6_n3_detail_text'] = MainService.getN6N3DetailText();
    }

    function processTransFatIndexText(data) {
        data['trans_fat_index_summary_text'] = MainService.getTransFatIndexSummaryText(data['trans_fat_index']);
        data['trans_fat_index_detail_text'] = MainService.getTransFatIndexDetailText(data['trans_fat_index']);
    }

    function processIndexPosition(data) {
        var minPos = 10,
            maxPos = 90,
            omega3Pos,
            n6n3Pos,
            transFatPos,
            omega3RangeLow = 2,
            omega3RangeHigh = 12,
            n6n3RangeLow = 2,
            n6n3RangeHigh = 14,
            transFatRangeLow = 0,
            transFatRangeHigh = 2.5,
            omega3_index = parseFloat(data.omega3_index),
            n6_n3 = parseFloat(data.n6_n3),
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

        if (n6_n3 < n6n3RangeLow) {
            n6n3Pos = minPos;
        } else if (n6_n3 > n6n3RangeHigh) {
            n6n3Pos = maxPos;
        } else {
            n6n3Pos = (maxPos * n6_n3 - maxPos * n6n3RangeLow + minPos * n6n3RangeHigh - minPos * n6_n3) / (n6n3RangeHigh - n6n3RangeLow);
        }
        $scope.omega_3_index_position_style = {"padding-left": omega3Pos + "%"};
        $scope.n6_n3_position_style = {"padding-left": n6n3Pos + "%"};
        $scope.trans_fat_index_position_style = {"padding-left": transFatPos + "%"};
    }
});