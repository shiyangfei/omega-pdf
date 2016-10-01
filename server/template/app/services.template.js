/**
 * Created by sfei on 8/11/2016.
 */
var app = angular.module('template');
app.service('MainService', function ($http) {
    var me = this;

    me.getOmega3IndexSummaryText = function (indexText) {
        var index = parseFloat(indexText);
        if (index > 8) {
            return me.omega3SummaryText.high;
        }
        if (index <= 8 && index >= 4) {
            return me.omega3SummaryText.medium;
        }
        if (index < 4) {
            return me.omega3SummaryText.low;
        }
    };

    me.getOmega3IndexDetailText = function (indexText) {
        return me.omega3DetailText;
    };

    me.getTransFatIndexSummaryText = function (indexText) {
        var index = parseFloat(indexText);
        if (index > 1.65) {
            return me.transFatSummaryText.high;
        }
        if (index <= 1.65 && index >= 1) {
            return me.transFatSummaryText.medium;
        }
        if (index < 1) {
            return me.transFatSummaryText.low;
        }
    };

    me.getTransFatIndexDetailText = function (indexText) {
        return me.transFatDetailText;
    };

    me.omega3SummaryText = {
        high: '你的Omega-3（欧米伽3 多元不饱和脂肪酸）处在理想范围内，位于超过了8％的区间。 建议你保持目前的Omega-3摄入量。',
        medium: '你的Omega-3（欧米伽3 多元不饱和脂肪酸）在中度范围内位于4-8％的区间。建议你增加Omega-3脂肪酸的摄入量。',
        low: '你的Omega-3（欧米伽3 多元不饱和脂肪酸）远低于目标范围所处的8％的区间。 建议你增加Omega-3脂肪酸的摄入量。'
    };

    me.omega3DetailText = '\
        <p>大量的学术研究结果和大群体（数万人以上）\
        人体测试显示Omega-3指数水平<4%时，罹患多种疾病的风险大大升高。\
        这些疾病包括心脏病、中风、癌症、痴呆和抑郁等。相比中等数值以下的\
        人而言，数值达理想水平(>8%)的人比低数值的人更长寿。提高你的Omeg\
        a-3指数并保持高指标会帮助你减少罹患这些疾病的风险。\
        </p>\
        <br>\
        <p>\
        建议补充含有ALA、DHA、EPA三种成分的欧米伽3制剂。且建议服用高纯度的\
        欧米伽3。单纯服用亚麻籽与紫苏等植物中提取的 ɑ亚麻酸（即ALA）对提高\
        血液中的欧米伽3水平不显著。\
        </p>\
        <br>\
        <p>\
        为了保持你的Omega-3指标保持在合适的区间，你应该每六个月就复查一次。\
        </p>';

    me.transFatSummaryText = {
        high: '你的反式脂肪酸（Trans Fat）指标远高于目标指数1%。建议你大幅度的减少反式脂肪酸的摄入量。',
        medium: '你的反式脂肪酸（Trans Fat）指标高于目标指数1%。建议你减少反式脂肪酸的摄入量。',
        low: '你的反式脂肪酸（Trans Fat）指标在理想范围内，位于低于1%的区间内。建议你保持目前的膳食结构。'
    };

    me.transFatDetailText = '\
        <p>\
        大量研究显示反式脂肪酸的指标<1%与心血管疾病低发病率相关。\
        多数人都在中间区域，指标大于1.65% 的人更容易罹患心血管疾病。</p>\
        <br>\
        <p>\
        反式脂肪酸不能在体内合成。大量的反式脂肪酸是来自于液体植物油氢化。从食物中摄入这些“工业反式脂肪酸”会增加“不健康的”胆固\
        醇水平、降低“健康的”胆固醇水平，更重要的是，这会引起更高的心脏病发病率。2014年美国食品药品管理局（FDA）已禁止在食品加\
        工中使用工业反式脂肪酸。\
        </p>\
        <br>\
        <p>\
            反式脂肪酸的血中浓度反映了饮食摄入程度。因此，\
            降低血液中反式脂肪酸浓度的唯一方法就是从食物中\
            摄取更少的反式脂肪酸。大多数反式脂肪酸的食物包括\
            蛋糕、饼干、派、油酥点心、薯条、玉米粉薄烙饼、薄\
            脆饼干、爆米花和人造黄油棒等。要知道你自己血液中\
            的反式脂肪酸数值的方法只有测量。\
        </p>';
});