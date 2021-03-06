export class ArticleWord {
  static rest = `<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="Content-Style-Type" content="text/css"/>
    <meta name="generator" content="Aspose.Words for .NET 15.1.0.0"/>
    <title></title></head>
<body>
<div><h2 style="margin:0pt 0pt 6pt 14.15pt; text-indent:0pt"><span
        style="font-family:等线; font-size:14pt; font-style:normal">1.</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
        style="font-family:等线; font-size:11pt; font-weight:bold">Rest&amp;</span><span
        style="font-family:等线; font-size:11pt; font-weight:bold">Restful</span></h2>
    <h3 style="margin:0pt 0pt 6pt 28.35pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt; font-style:normal">1.1</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt; font-weight:bold">overview</span></h3><h4
            style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.1.1</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt">rest</span><span style="font-family:宋体; font-size:11pt">、</span><span
            style="font-family:等线; font-size:11pt">restful</span><span
            style="font-family:宋体; font-size:11pt">我刚开始学</span><span
            style="font-family:等线; font-size:11pt">web</span><span style="font-family:宋体; font-size:11pt">开发的时候就听说过，记得那时候就搞不清楚，看了很多文章还是不懂，不过因为属于设计思想，倒没怎么影响实际工作。今天又想起来，根据这两年的体会，做个总结。</span>
    </h4>
    <h3 style="margin:0pt 0pt 6pt 28.35pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt; font-style:normal">1.2</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt; font-weight:bold">what</span></h3><h4
            style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.2.1</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt">rest</span><span style="font-family:宋体; font-size:11pt">之前的传统的</span><span
            style="font-family:等线; font-size:11pt">API</span><span style="font-family:宋体; font-size:11pt">接口和软件架构</span>
    </h4><h5 style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{1}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt">http</span><span
            style="font-family:宋体; font-size:11pt">通过</span><span style="font-family:等线; font-size:11pt">url</span><span
            style="font-family:宋体; font-size:11pt">来通信，</span><span
            style="font-family:等线; font-size:11pt">url</span><span style="font-family:宋体; font-size:11pt">直接决定了前后端的设计。传统的</span><span
            style="font-family:等线; font-size:11pt">url</span><span style="font-family:宋体; font-size:11pt">动名词混用使得代码冗余混乱不可读。</span>
    </h5><h5 style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{2}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt">SOAP</span><span
            style="font-family:宋体; font-size:11pt">协议</span><span
            style="font-family:宋体; font-size:11pt">过重，没有充分发挥</span><span
            style="font-family:等线; font-size:11pt">http</span><span style="font-family:宋体; font-size:11pt">的功能。</span>
    </h5><h4 style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.2.2</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt">rest</span><span style="font-family:等线; font-size:11pt"> </span></h4>
    <h5 style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{1}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt">REpresentational State Transfer</span><span
            style="font-family:宋体; font-size:11pt">，是项目架构，一种</span><span
            style="font-family:等线; font-size:11pt">webAPI</span><span style="font-family:宋体; font-size:11pt">的标准，编码的风格，设计模式。</span><span
            style="font-family:宋体; font-size:11pt">简单说就是将网络上所有事物都抽象为资源，这个资源可以被</span><span
            style="font-family:等线; font-size:11pt">url</span><span
            style="font-family:宋体; font-size:11pt">唯一标识，可以有多种操作。</span></h5><h4
            style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.2.3</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt">Restful</span><span
            style="font-family:宋体; font-size:11pt">是</span><span style="font-family:等线; font-size:11pt">rest</span><span
            style="font-family:宋体; font-size:11pt">的具体实现。基于</span><span
            style="font-family:等线; font-size:11pt">rest</span><span
            style="font-family:宋体; font-size:11pt">思想设计的软件架构和</span><span
            style="font-family:等线; font-size:11pt">API</span><span
            style="font-family:宋体; font-size:11pt">可以说实现了</span><span
            style="font-family:等线; font-size:11pt">restful</span><span
            style="font-family:宋体; font-size:11pt">风格。比如</span><span
            style="font-family:等线; font-size:11pt">url</span><span
            style="font-family:宋体; font-size:11pt">的设计，返回数据用</span><span
            style="font-family:等线; font-size:11pt">json</span><span style="font-family:宋体; font-size:11pt">、</span><span
            style="font-family:等线; font-size:11pt">xml</span></h4>
    <h3 style="margin:0pt 0pt 6pt 28.35pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt; font-style:normal">1.3</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt; font-weight:bold">feature</span></h3><h4
            style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.3.1</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">可以方便进行前后端分离，也就是数据和展示分离</span></h4><h5
            style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{1}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">传统的</span><span
            style="font-family:等线; font-size:11pt">soap</span><span style="font-family:宋体; font-size:11pt">的输出是将数据和展示混在一起的，这样有</span><span
            style="font-family:等线; font-size:11pt">2</span><span style="font-family:宋体; font-size:11pt">个缺点</span></h5>
    <h6 style="font-weight:normal; margin:0pt 0pt 0pt 70.9pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">[1]</span><span style="font:7.0pt 'Times New Roman'"> </span><span
            style="font-family:宋体; font-size:11pt">不方便解，</span><span
            style="font-family:等线; font-size:11pt">html</span><span
            style="font-family:宋体; font-size:11pt">和数据混在一起</span></h6><h6
            style="font-weight:normal; margin:0pt 0pt 0pt 70.9pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">[2]</span><span style="font:7.0pt 'Times New Roman'"> </span><span
            style="font-family:宋体; font-size:11pt">不能复用，不同的客户端要返回不同的输出</span></h6><h5
            style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{2}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">分离后，后端只提供统一格式的数据，前端接收到数据，怎么展示由前端决定</span></h5><h5
            style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{3}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt">url</span><span style="font-family:宋体; font-size:11pt">更加易读，简洁。只有复数名词，动词放在请求行中。</span>
    </h5><h4 style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.3.2</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">扩展性高，减少了后端的压力</span></h4><h4
            style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.3.3</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">有利于实现负载均衡，减少缓存和作用域的数据量</span></h4><h5
            style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{1}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">每一个请求都具有</span><span style="font-family:等线; font-size:11pt">User credentials</span><span
            style="font-family:宋体; font-size:11pt">等所需要的全部信息，所以能被任意可用的</span><span
            style="font-family:等线; font-size:11pt">Server</span><span style="font-family:宋体; font-size:11pt">应答</span>
    </h5><h4 style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.3.4</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">增大了前端的要求</span></h4><h4
            style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.3.5</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">更好的利用了</span><span style="font-family:等线; font-size:11pt">http</span><span
            style="font-family:宋体; font-size:11pt">本来的功能和特性</span></h4>
    <h3 style="margin:0pt 0pt 6pt 28.35pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt; font-style:normal">1.4</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt; font-weight:bold">comprehending</span></h3><h4
            style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.4.1</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt">web</span><span style="font-family:宋体; font-size:11pt">中的行为，少的时候好说。多了、复杂了，就必然需要分类管理，分类按行为和资源分。</span>
    </h4><h5 style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{1}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">对应图书馆，图书馆的书都是按书分类的，每种书又有</span><span
            style="font-family:等线; font-size:11pt">CRUD4</span><span style="font-family:宋体; font-size:11pt">种操作，而不是资源和行为的联合主键。比如去借书，不是直接在系统中输入</span><span
            style="font-family:等线; font-size:11pt">”</span><span style="font-family:宋体; font-size:11pt">借</span><span
            style="font-family:等线; font-size:11pt">java</span><span
            style="font-family:等线; font-size:11pt">&lt;&lt;</span><span
            style="font-family:宋体; font-size:11pt">编程思想</span><span
            style="font-family:等线; font-size:11pt">&gt;</span><span
            style="font-family:等线; font-size:11pt">&gt;</span><span style="font-family:等线; font-size:11pt">”</span><span
            style="font-family:宋体; font-size:11pt">，而是先搜索书，然后在</span><span
            style="font-family:等线; font-size:11pt">4</span><span style="font-family:宋体; font-size:11pt">种操作中选借。</span>
    </h5><h5 style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{2}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">再比如</span><span
            style="font-family:宋体; font-size:11pt">淘宝买</span><span style="font-family:宋体; font-size:11pt">东西，本质就是客户端调用服务端的</span><span
            style="font-family:等线; font-size:11pt">API</span><span style="font-family:宋体; font-size:11pt">，买书都是直接</span><span
            style="font-family:宋体; font-size:11pt">搜</span><span style="font-family:宋体; font-size:11pt">书名，没有直接搜买</span><span
            style="font-family:等线; font-size:11pt">&lt;</span><span
            style="font-family:等线; font-size:11pt">&lt;</span><span
            style="font-family:宋体; font-size:11pt">书名</span><span style="font-family:等线; font-size:11pt">&gt;&gt;</span><span
            style="font-family:宋体; font-size:11pt">的</span></h5><h4
            style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.4.2</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">分类的好处就是降低复杂度，实现动作和行为的解耦。</span></h4><h5
            style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{1}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">这种解耦是设计上、思想上的，即使是后台，也是按资源和动作分，比如</span><span
            style="font-family:等线; font-size:11pt">dao</span><span
            style="font-family:宋体; font-size:11pt">层，要分</span><span
            style="font-family:等线; font-size:11pt">UserDao</span><span
            style="font-family:宋体; font-size:11pt">、</span><span
            style="font-family:等线; font-size:11pt">ProductDao</span><span
            style="font-family:宋体; font-size:11pt">，然后每种</span><span
            style="font-family:等线; font-size:11pt">dao</span><span
            style="font-family:宋体; font-size:11pt">有各自的</span><span
            style="font-family:等线; font-size:11pt">crud</span><span style="font-family:宋体; font-size:11pt">。也就是说，新增商品这个方法是对商品资源的一种操作，先要有商品，先要定位到商品的</span><span
            style="font-family:等线; font-size:11pt">bean</span><span style="font-family:宋体; font-size:11pt">和表，也就是商品的抽象，才能进行新增的操作。</span>
    </h5><h5 style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{2}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">网络上的所有事物都被抽象为资源，这个资源可以用</span><span
            style="font-family:等线; font-size:11pt">url</span><span style="font-family:宋体; font-size:11pt">唯一标识，对这个资源的操作通过</span><span
            style="font-family:等线; font-size:11pt">http</span><span
            style="font-family:宋体; font-size:11pt">协议的</span><span
            style="font-family:等线; font-size:11pt">method</span><span style="font-family:宋体; font-size:11pt">表达，可以有多种表现形式</span>
    </h5><h4 style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.4.3</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">对资源的操作都是无状态的</span></h4><h5
            style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{1}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">对无状态的理解</span><span
            style="font-family:宋体; font-size:11pt"> </span><span style="font-family:宋体; font-size:11pt">  </span><a
            style="color:#0563c1" href="https://blog.csdn.net/Jmilk/article/details/50461577"><span
            style="color:#0563c1; font-family:等线; font-size:11pt; text-decoration:underline">https://blog.csdn.net/Jmilk/article/details/50461577</span></a>
    </h5><h5 style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{2}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:宋体; font-size:11pt">类似于</span><span
            style="font-family:等线; font-size:11pt">dao</span><span style="font-family:宋体; font-size:11pt">层对</span><span
            style="font-family:等线; font-size:11pt">DB</span><span
            style="font-family:宋体; font-size:11pt">的操作，</span><span
            style="font-family:等线; font-size:11pt">DB</span><span style="font-family:宋体; font-size:11pt">不会保存每次操作的状态，每次数据库</span><span
            style="font-family:等线; font-size:11pt">CRUD</span><span style="font-family:宋体; font-size:11pt">都是无状态的</span><span
            style="font-family:等线; font-size:11pt">==</span><span style="font-family:宋体; font-size:11pt">》</span><span
            style="font-family:宋体; font-size:11pt">这要求每次请求都要携带足够的信息</span></h5><h5
            style="font-weight:normal; line-height:11pt; margin:0pt 0pt 0pt 56.7pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">{3}</span><span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt">adv</span></h5><h6
            style="font-weight:normal; margin:0pt 0pt 0pt 70.9pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">[1]</span><span style="font:7.0pt 'Times New Roman'"> </span><span
            style="font-family:等线; font-size:11pt">BS2</span><span style="font-family:宋体; font-size:11pt">端都不需要保存状态，只需要处理当前的请求，可以更容易的释放资源，可以使用连接池和缓存来提高性能</span>
    </h6><h6 style="font-weight:normal; margin:0pt 0pt 0pt 70.9pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt">[2]</span><span style="font:7.0pt 'Times New Roman'"> </span><span
            style="font-family:宋体; font-size:11pt">任意</span><span style="font-family:等线; font-size:11pt">2</span><span
            style="font-family:宋体; font-size:11pt">个</span><span style="font-family:等线; font-size:11pt">api</span><span
            style="font-family:宋体; font-size:11pt">都不是相互依赖的，降低的使用的难度和风险</span></h6>
    <h3 style="margin:0pt 0pt 6pt 28.35pt; text-indent:0pt"><span
            style="font-family:等线; font-size:11pt; font-style:normal">1.5</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt; font-weight:bold">summary</span></h3><h4
            style="font-weight:normal; margin:0pt 0pt 6pt 42.55pt; text-indent:0pt"><span
            style="display:inline; font-family:等线; font-size:11pt; font-style:normal; font-variant:normal; text-decoration:none; text-transform:none; vertical-align:baseline">1.5.1</span><span
            style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span
            style="font-family:等线; font-size:11pt">rest</span><span style="font-family:宋体; font-size:11pt">把请求分成了</span><span
            style="font-family:等线; font-size:11pt">2</span><span style="font-family:宋体; font-size:11pt">部分，干什么和怎么干，也就是要操作的资源和怎么操作。简化了前后端的业务处理。更充分的使用了</span><span
            style="font-family:等线; font-size:11pt">http</span><span style="font-family:宋体; font-size:11pt">的功能和特性。也更易读。其无状态的特性可以更容易的实现连接池缓存等技术来提高性能。</span>
    </h4>
    <p style="line-height:10.5pt; margin:7.8pt 0pt"><span style="font-family:等线; font-size:10.5pt">&#xa0;</span></p>
</div>
<div class="cnzz" style="display: none;">
    <script src="https://s23.cnzz.com/z_stat.php?id=1277655852&web_id=1277655852" language="JavaScript"></script>
</div>
<div class="docpe" style="position: absolute;color: white;margin-left:-450;">
    <a target="_blank" href="#"></a>
</div>
</body>
</html>
`;
}
