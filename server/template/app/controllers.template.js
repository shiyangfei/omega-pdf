/**
 * Created by sfei on 8/11/2016.
 */

var app = angular.module('template');
app.controller('MainController', function ($scope, MainService) {
    var me = this;
    $scope.report = processData({
        "email": "sfei1001@gmail.com",
        "id": "A00099999",
        "name": "李明",
        "dob": "11/09/1988",
        "collection_date": "09/29/2015",
        "result_date": "08/23/2016",
        "provider": "赵锋体检中心",
        "account": "个人账户",
        "omega3_index": 6,
        "omega3_reference_range_low": "2%",
        "omega3_reference_range_high": "12%",
        "trans_fat_index": 1,
        "trans_fat_reference_range_low": "0%",
        "trans_fat_reference_range_high": "1.65%",
        "omega3_fatty_acids": "15.42%",
        "omega3_fatty_rank": ">80%",
        "omega3_fatty_ref_range": "2.9-3.9%",
        "omega3_index_rank": ">99%",
        "omega3_index_ref_range": "2.9-12.9%",
        "C18_3n3": "0.90%",
        "C20_5n3": "7.12%",
        "C22_5n3": "2.32%",
        "C22_6n3": "5.08%",
        "omega6_fatty_acids": "32.74%",
        "omega6_fatty_acids_rank": "13th",
        "omega6_fatty_acids_ref_range": "26.3-28.3%",
        "C18_2n6": "22.69%",
        "C18_3n6": "0.10%",
        "C20_2n6": "0.20%",
        "C20_3n6": "0.30%",
        "C20_4n6": "0.40%",
        "C22_4n6": "0.50%",
        "C22_5n6": "0.20%",
        "cis_fatty_acids": "16.69%",
        "cis_fatty_acids_rank": "5th",
        "cis_fatty_acids_ref_range": "15-32%",
        "C16_1n7": "0.10%",
        "C18_1n9": "0.20%",
        "C20_1n9": "0.30%",
        "C24_1n9": "0.40%",
        "saturated_fatty_acids": "0.50%",
        "saturated_fatty_acids_rank": "79%",
        "saturated_fatty_acids_ref_range": "29-32%",
        "C14_0": "0.10%",
        "C16_0": "0.20%",
        "C18_0": "0.30%",
        "C20_0": "0.40%",
        "C22_0": "0.50%",
        "C24_0": "0.50%",
        "trans_fatty_acids": "0.51%",
        "trans_fatty_acids_rank": "5th",
        "trans_fatty_acids_ref_range": "0.3-0.5%",
        "C16_1n7t": "0.10%",
        "C18_1t": "0.20%",
        "C18_2n6t": "0.30%",
        "trans_fat_index_rank": "4th",
        "trans_fat_index_ref_range": "0.5-0.9%",
        "AA_EPA": "1:2:1",
        "AA_EPA_rank": "<1%",
        "AA_EPA_ref_range": "1.4-1.6%",
        "omega6_omega3": "1:2:1",
        "omega6_omega3_rank": "<1%",
        "omega6_omega3_ref_range": "2.3-33.4%"
    });
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
            transFatRangeHigh = 2.5;
        if (data.omega3_index < omega3RangeLow) {
            omega3Pos = minPos;
        } else if (data.omega3_index > omega3RangeHigh) {
            omega3Pos = maxPos;
        } else {
            omega3Pos = (maxPos * data.omega3_index - maxPos * omega3RangeLow + minPos * omega3RangeHigh - minPos * data.omega3_index) / (omega3RangeHigh - omega3RangeLow);
        }

        if (data.trans_fat_index < transFatRangeLow) {
            transFatPos = minPos;
        } else if (data.trans_fat_index > transFatRangeHigh) {
            transFatPos = maxPos;
        } else {
            transFatPos = (maxPos * data.trans_fat_index - maxPos * transFatRangeLow + minPos * transFatRangeHigh - minPos * data.trans_fat_index) / (transFatRangeHigh - transFatRangeLow);
        }
        $scope.omega_3_index_position_style = {"padding-left": omega3Pos + "%"};
        $scope.trans_fat_index_position_style = {"padding-left": transFatPos + "%"};
    }
});