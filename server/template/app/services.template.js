/**
 * Created by sfei on 8/11/2016.
 */
var app = angular.module('template');
app.service('MainService', function ($http) {
    var me = this;

    me.getOmega3IndexSummaryText = function (indexText) {
        var index = parseFloat(indexText);
        if (index > 8) {return me.omega3SummaryText.high;}
        if (index <= 8 && index >= 4) {return me.omega3SummaryText.medium;}
        if (index < 4) {return me.omega3SummaryText.low;}
    };

    me.getOmega3IndexDetailText = function (indexText) {
        var index = parseFloat(indexText);
        if (index > 8) {return me.omega3DetailText.high;}
        if (index <= 8 && index >= 4) {return me.omega3DetailText.medium;}
        if (index < 4) {return me.omega3DetailText.low;}
    };

    me.getTransFatIndexSummaryText = function (indexText) {
        var index = parseFloat(indexText);
        if (index > 1.65) {return me.transFatSummaryText.high;}
        if (index <= 1.65 && index >= 1) {return me.transFatSummaryText.medium;}
        if (index < 1) {return me.transFatSummaryText.low;}
    };

    me.getTransFatIndexDetailText = function (indexText) {
        var index = parseFloat(indexText);
        if (index > 1.65) {return me.transFatDetailText.high;}
        if (index <= 1.65 && index >= 1) {return me.transFatDetailText.medium;}
        if (index < 1) {return me.transFatDetailText.low;}
    };

    me.omega3SummaryText = {
        high: '你的Omega-3（欧米伽3 多元不饱和脂肪酸）处在理想范围内，位于超过了8％的区间。 建议你保持目前的Omega-3摄入量。',
        medium: '你的Omega-3（欧米伽3 多元不饱和脂肪酸）在中度范围内位于4-8％的区间。建议你增加Omega-3脂肪酸的摄入量。',
        low: '你的Omega-3（欧米伽3 多元不饱和脂肪酸）远低于目标范围所处的8％的区间。 建议你增加Omega-3脂肪酸的摄入量。'
    };

    me.omega3DetailText = {
        high: '<p>很多研究显示Omega-3指数水平中相比低数值的人而言，高数值的人更少患有种种疾病的风险。这些疾病包括心脏病、中风、痴呆和抑郁等例。高Omega-3的人甚至比低Omega-3的人更长寿。提高你的Omega-3指数并保持高指标会帮助你减少患有这些疾病的风险。</p><br><p>Omega-3主要发现于鱼类中，特别是“含油多的”鱼，例如那些附录表格中近顶部鱼类。两种最主要的Omega-3为EPA(eicosapentaenoicacid二十碳五烯酸)和DHA(docosahexaenoicacid二十二碳六烯酸)。</p><br><p>建议补充含有阿尔法亚麻酸、DHA、EPA三种成分的欧米伽3制剂。且建议服用高浓度的欧米伽3。单纯服用亚麻籽与紫苏等植物中提取的阿尔法亚麻酸（即ALA）对提高血液中的欧米伽3水平不显著。</p><br><p>为了确保你的Omega-3指标保持在合适的区间，你应该每六个月就复查一次。</p>',
        medium: '<p>很多研究显示Omega-3指数水平中相比低数值的人而言，高数值的人患有种种疾病的风险更小。这些疾病包括心脏病、中风、痴呆和抑郁等例。高Omega-3的人甚至比低Omega-3的人更长寿。提高你的Omega-3指数并保持高指标会帮助你减少患有这些疾病的风险。</p><br><p>Omega-3主要发现于鱼类中，特别是“含油多的”鱼，例如那些附录表格中近顶部鱼类。两种最主要的Omega-3为EPA (eicosapentaenoic acid二十碳五烯酸)和DHA (docosahexaenoic acid二十二碳六烯酸)。</p><br><p>能够增加你的Omega-3指数以达到目标区间（>8%）所需要的EPA+DHA总量是不能准确预测的。多种因素－年龄，性别，体重，膳食和遗传因素，吸烟，可能服用的药物，其他用药情况等等－都可以影响你的身体对额外EPA+DHA的反应。然而，我们建议你每日增加0.5–1 克 (500 – 1000 毫克) EPA+DHA摄入量。尽管食用多油脂鱼类可以达到这个效果，还是有必要食用鱼油补剂来达到EPA+DHA摄入量的标准。表格里列出了每3盎司各类海鲜和膳食补充中所含EPA和DHA的大致总量。</p><br><p>建议补充含有阿尔法亚麻酸、DHA、EPA三种成分的欧米伽3制剂。且建议服用高浓度的欧米伽3。单纯服用亚麻籽与紫苏等植物中提取的阿尔法亚麻酸（即ALA）对提高血液中的欧米伽3水平不显著。</p><br><p>了解你身体对EPA+DHA摄入的增加会有何反应的唯一办法是再一次测量你的Omega-3指数。再次测试之前你应该等待3—4个月以给你的系统足够时间适应摄入量的增加。一旦达到你的目标Omega-3指标，你就需要每六个月重新测量一次数值。</p>',
        low: '<p>很多研究显示Omega-3指数水平中相比低数值的人而言，高数值的人患有种种疾病的风险更小。这些疾病包括心脏病、中风、痴呆和抑郁等例。高Omega-3的人甚至比低Omega-3的人更长寿。提高你的Omega-3指数并保持高指标会帮助你减少患有这些疾病的风险。</p><br><p>Omega-3主要发现于鱼类中，特别是“含油多的”鱼，例如那些附录表格中近顶部鱼类。两种最主要的Omega-3为EPA (eicosapentaenoic acid二十碳五烯酸)和DHA (docosahexaenoic acid二十二碳六烯酸)。</p><br><p>能够增加你的Omega-3指数以达到目标区间（>8%）所需要的EPA+DHA总量是不能准确预测的。多种因素－年龄，性别，体重，膳食和遗传因素，吸烟，可能服用的药物，其他用药情况等等－都可以影响你的身体对额外EPA+DHA的反应。然而，我们建议你每日增加2–3 克 (2000 – 3000 毫克) EPA+DHA摄入量。尽管食用多油脂鱼类可以达到这个效果，还是有必要食用鱼油补剂来达到EPA+DHA摄入量的标准。表格里列出了每3盎司各类海鲜和膳食补充中所含EPA和DHA的大致总量。</p><br><p>建议补充含有阿尔法亚麻酸、DHA、EPA三种成分的欧米伽3制剂。且建议服用高浓度的欧米伽3。单纯服用亚麻籽与紫苏等植物中提取的阿尔法亚麻酸（即ALA）对提高血液中的欧米伽3水平不显著。</p><br><p>了解你身体对EPA+DHA摄入的增加会有何反应的唯一办法是再一次测量你的Omega-3指数。再次测试之前你应该等待3—4个月以给你的系统足够时间适应摄入量的增加。一旦达到你的目标Omega-3指标，你就需要每六个月重新测量一次数值。</p>'
    };

    me.transFatSummaryText = {
        high: '你的反式脂肪酸（Trans Fat）指标远高于目标指数1%。建议你大幅度的减少反式脂肪酸的摄入量。',
        medium: '你的反式脂肪酸（Trans Fat）指标高于目标指数1%。建议你减少反式脂肪酸的摄入量。',
        low: '你的反式脂肪酸（Trans Fat）指标在理想范围内，位于低于1%的区间内。建议你保持目前的膳食结构。'
    };

    me.transFatDetailText = {
        high: '<p>正如必要的Omega-3和Omega-6，反式脂肪酸（油脂）仅来自于我们的食物；即是说，他们不能像饱和脂肪和单元不饱和脂肪那样在体内合成。虽然我们“自然地”在全脂乳制品和牛肉中发现少量该类脂肪，但（80-90%）大量的反式脂肪酸是来自于液体植物油的“部分加氢”（partial hydrogenation）。该类工业流程将这些油脂转化进固体人造黄油和起酥油中。这些“工业反式脂肪酸”的消耗量与增加“不健康的”胆固醇水平、降低“健康的”胆固醇水平有关，更重要的是，这会引起更高的心脏病发率。2014年美国实物药品管理局（FDA）开始尽可能取消美国人饮食中的工业反式脂肪酸。</p><br><p>反式脂肪酸的血中浓度反映了饮食程度——吃得更多，血液中反式脂肪酸浓度越高。因此，降低血液中反式脂肪酸浓度的唯一方法就是从食物中摄取更少的反式脂肪酸。在美式膳食中提供大多数反式脂肪酸的食物包括蛋糕、饼干、派、油酥点心、薯条、玉米粉薄烙饼、薄脆饼干、爆米花和人造黄油棒，如附录反式脂肪酸表格所示。</p><br><p>遗憾的是，我们实际上并不确定膳食中含有多少反式脂肪酸。因为不同数量的反式脂肪酸其实存在于大千食物中，并且任何食物中的含量都随着食物中所用的脂肪值的不同而不同。因此，要知道你自己的反式脂肪酸数值的方法只有测量。</p><br><p>美国人吃了太多反式脂肪酸。其实，只有大概12%的美国人反式脂肪酸的指标<1%，这个指标和心血管病低病发率相关。大多数美国人都在中间区域，但超过20%的美国人在大雨1.65%的非理想区域。</p>',
        medium: '<p>正如必要的Omega-3和Omega-6，反式脂肪酸（油脂）仅来自于我们的食物；即是说，他们不能像饱和脂肪和单元不饱和脂肪那样在体内合成。虽然我们“自然地”在全脂乳制品和牛肉中发现少量该类脂肪，但（80-90%）大量的反式脂肪酸是来自于液体植物油的“部分加氢”（partial hydrogenation）。该类工业流程将这些油脂转化进固体人造黄油和起酥油中。这些“工业反式脂肪酸”的消耗量与增加“不健康的”胆固醇水平、降低“健康的”胆固醇水平有关，更重要的是，这会引起更高的心脏病发率。2014年美国实物药品管理局（FDA）开始尽可能取消美国人饮食中的工业反式脂肪酸。</p><br><p>反式脂肪酸的血中浓度反映了饮食程度——吃得更多，血液中反式脂肪酸浓度越高。因此，降低血液中反式脂肪酸浓度的唯一方法就是从食物中摄取更少的反式脂肪酸。在美式膳食中提供大多数反式脂肪酸的食物包括蛋糕、饼干、派、油酥点心、薯条、玉米粉薄烙饼、薄脆饼干、爆米花和人造黄油棒，如附录反式脂肪酸表格所示。</p><br><p>遗憾的是，我们实际上并不确定膳食中含有多少反式脂肪酸。因为不同数量的反式脂肪酸其实存在于大千食物中，并且任何食物中的含量都随着食物中所用的脂肪值的不同而不同。因此，要知道你自己的反式脂肪酸数值的方法只有测量。</p><br><p>美国人吃了太多反式脂肪酸。其实，只有大概12%的美国人反式脂肪酸的指标<1%，这个指标和心血管病低病发率相关。大多数美国人都在中间区域，但超过20%的美国人在大雨1.65%的非理想区域。</p>',
        low: '<p>正如必要的Omega-3和Omega-6，反式脂肪酸（油脂）仅来自于我们的食物；即是说，他们不能像饱和脂肪和单元不饱和脂肪那样在体内合成。虽然我们“自然地”在全脂乳制品和牛肉中发现少量该类脂肪，但（80-90%）大量的反式脂肪酸是来自于液体植物油的“部分加氢”（partial hydrogenation）。该类工业流程将这些油脂转化进固体人造黄油和起酥油中。这些“工业反式脂肪酸”的消耗量与增加“不健康的”胆固醇水平、降低“健康的”胆固醇水平有关，更重要的是，这会引起更高的心脏病发率。2014年美国实物药品管理局（FDA）开始尽可能取消美国人饮食中的工业反式脂肪酸。</p><br><p>反式脂肪酸的血中浓度反映了饮食程度——吃得更多，血液中反式脂肪酸浓度越高。因此，降低血液中反式脂肪酸浓度的唯一方法就是从食物中摄取更少的反式脂肪酸。在美式膳食中提供大多数反式脂肪酸的食物包括蛋糕、饼干、派、油酥点心、薯条、玉米粉薄烙饼、薄脆饼干、爆米花和人造黄油棒，如附录反式脂肪酸表格所示。</p><br><p>遗憾的是，我们实际上并不确定膳食中含有多少反式脂肪酸。因为不同数量的反式脂肪酸其实存在于大千食物中，并且任何食物中的含量都随着食物中所用的脂肪值的不同而不同。因此，要知道你自己的反式脂肪酸数值的方法只有测量。</p><br><p>美国人吃了太多反式脂肪酸。其实，只有大概12%的美国人反式脂肪酸的指标<1%，这个指标和心血管病低病发率相关。大多数美国人都在中间区域，但超过20%的美国人在大雨1.65%的非理想区域。</p>'
    };
});