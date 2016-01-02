$( document ).ready(function() {
    // Shift nav in mobile when clicking the menu.
    $(document).on('click', "[data-toggle='wy-nav-top']", function() {
      $("[data-toggle='wy-nav-shift']").toggleClass("shift");
      $("[data-toggle='rst-versions']").toggleClass("shift");
    });
    // Close menu when you click a link.
    $(document).on('click', ".wy-menu-vertical .current ul li a", function() {
      $("[data-toggle='wy-nav-shift']").removeClass("shift");
      $("[data-toggle='rst-versions']").toggleClass("shift");
    });
    $(document).on('click', "[data-toggle='rst-current-version']", function() {
      $("[data-toggle='rst-versions']").toggleClass("shift-up");
    });
    // Make tables responsive
    $("table.docutils:not(.field-list)").wrap("<div class='wy-table-responsive'></div>");
    // ---
    // START DOC MODIFICATION BY RUFNEX
    // v1.0 04.02.2015
    // Add ToogleButton to get FullWidth-View by Johannes Gamperl codeigniter.de
    var ciNav = '<style >';
    ciNav +=        '#nav { background-color: #494949; margin: 0; padding: 0;display:none;}';
    ciNav +=        '#nav2 { background: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAARgAA/+4ADkFkb2JlAGTAAAAAAf/bAIQABAMDAwMDBAMDBAYEAwQGBwUEBAUHCAYGBwYGCAoICQkJCQgKCgwMDAwMCgwMDQ0MDBERERERFBQUFBQUFBQUFAEEBQUIBwgPCgoPFA4ODhQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAMgAzAwERAAIRAQMRAf/EAFkAAQADAQAAAAAAAAAAAAAAAAABBQcIAQEAAAAAAAAAAAAAAAAAAAAAEAABAgYDAAAAAAAAAAAAAAAAAVERAtMEFJRVBxgRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMRAAAAAAAA7a87dZcCu3e1wHnbrLgV272uA87dZcCu3e1wHnbrLgV272uA87dZcCu3e1wHnbrLgV272uA87dZcCu3e1wN/wJGAYEjAMCRgGBIwDAkYBgSMAwJGAsoIwCCMAgjAIIwCCMAgjAIIwEgAAAAAAAAAAAAAAAAAAAAAAAH//2Q==) repeat-x scroll left top transparent; margin: 0; padding: 0 310px 0 0; text-align: right;display:none;}';
    ciNav +=        '#nav_inner { background-color: transparent; font-family: Lucida Grande,Verdana,Geneva,sans-serif; font-size: 11px; margin: 0; padding: 8px 12px 0 20px;}';
    ciNav +=        'table.ciNav { background-color: #494949; width: 100%; }';
    ciNav +=        'table.ciNav ul { margin: 10px; margin-top:0; padding: 5px; }';
    ciNav +=        'table.ciNav td li { font-size:0.82em; margin-left: 20px; list-style-image: url(data:image/gif;base64,R0lGODlhCwAJALMJAO7u7uTk5PLy8unp6fb29t7e3vj4+Li4uIWFheTk5AAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAkALAAAAAALAAkAAAQoMJ1JqTQ4Z3SI98jHCWSJkByArCyiHkMsIzEX3DeCc0Xv+4hEa5iIAAA7); }';
    ciNav +=        'table.ciNav h3 { margin:0; margin-left: 10px; }';
    ciNav +=        'table.ciNav h3.first { margin-bottom: 20px; }';
    ciNav +=        'table.ciNav h3 a { color:#fff;text-decoration: none; font-size:12px; }';
    ciNav +=        'table.ciNav td li a { color:#fff;text-decoration: none; font-size:11px; line-height:1.4em; font-weight: 300; color: #aaa; }';
    ciNav +=        'table.ciNav td.td_sep {padding-left:20px; background: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAARgAA/+4ADkFkb2JlAGTAAAAAAf/bAIQABAMDAwMDBAMDBAYEAwQGBwUEBAUHCAYGBwYGCAoICQkJCQgKCgwMDAwMCgwMDQ0MDBERERERFBQUFBQUFBQUFAEEBQUIBwgPCgoPFA4ODhQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgACAACAwERAAIRAQMRAf/EAEsAAQAAAAAAAAAAAAAAAAAAAAcBAQAAAAAAAAAAAAAAAAAAAAAQAQEAAAAAAAAAAAAAAAAAAADVEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwAesg//2Q==) repeat-y scroll left top transparent;}';
    ciNav +=    '</style>';
    ciNav +=    '<div style="background:#494949;">';
    ciNav +=        '<div id="nav">';
    ciNav +=            '<div id="nav_inner">';
    ciNav +=                '<table class="ciNav">';
    ciNav +=                    '<tr>';
    ciNav +=                        '<td valign="top">';
    ciNav +=                            '<h3 class="first"><a href="../general/welcome.html">欢迎使用 CodeIgniter</a></h3>';
    ciNav +=                            '<h3><a href="../installation/index.html">安装说明</a></h3>';
    ciNav +=                            '<ul>';
    ciNav +=                                '<li><a href="../installation/downloads.html">下载 CodeIgniter</a></li>';
    ciNav +=                                '<li><a href="../installation/index.html">安装说明</a></li>';
    ciNav +=                                '<li><a href="../installation/upgrading.html">从老版本升级</a></li>';
    ciNav +=                                '<li><a href="../installation/troubleshooting.html">疑难解答</a></li>';
    ciNav +=                            '</ul>';
    ciNav +=                            '<h3><a href="../overview/index.html">CodeIgniter 概览</a></h3>';
    ciNav +=                            '<ul>';
    ciNav +=                                '<li><a href="../overview/getting_started.html">开始</a></li>';
    ciNav +=                                '<li><a href="../overview/at_a_glance.html">CodeIgniter 是什么？</a></li>';
    ciNav +=                                '<li><a href="../overview/features.html">支持特性</a></li>';
    ciNav +=                                '<li><a href="../overview/appflow.html">应用程序流程图</a></li>';
    ciNav +=                                '<li><a href="../overview/mvc.html">模型 - 视图 - 控制器</a></li>';
    ciNav +=                                '<li><a href="../overview/goals.html">架构目标</a></li>';
    ciNav +=                            '</ul>';
    ciNav +=                            '<h3><a href="../tutorial/index.html">教程</a></h3>';
    ciNav +=                            '<ul>';
    ciNav +=                                '<li><a href="../tutorial/static_pages.html">加载静态内容</a></li>';
    ciNav +=                                '<li><a href="../tutorial/news_section.html">读取新闻条目</a></li>';
    ciNav +=                                '<li><a href="../tutorial/create_news_items.html">创建新闻条目</a></li>';
    ciNav +=                                '<li><a href="../tutorial/conclusion.html">结束语</a></li>';
    ciNav +=                            '</ul>';
    ciNav +=                            '<h3><a href="../contributing/index.html">向 CodeIgniter 贡献你的力量</a></h3>';
    ciNav +=                            '<ul>';
    ciNav +=                                '<li class="toctree-l2"><a href="../documentation/index.html">编写 CodeIgniter 的文档</a></li>';
    ciNav +=                                '<li class="toctree-l2"><a href="../DCO.html">Developer&#8217;s Certificate of Origin 1.1</a></li>';
    ciNav +=                            '</ul>';
    ciNav +=                        '</td>';
    ciNav +=                        '<td valign="top" class="td_sep">';
    ciNav +=                            '<h3><a href="../general/index.html">常规主题</a></h3>';
    ciNav +=                            '<ul>';
    ciNav +=                                '<li><a href="../general/urls.html">CodeIgniter URL</a></li>';
    ciNav +=                                '<li><a href="../general/controllers.html">控制器</a></li>';
    ciNav +=                                '<li><a href="../general/reserved_names.html">保留名称</a></li>';
    ciNav +=                                '<li><a href="../general/views.html">视图</a></li>';
    ciNav +=                                '<li><a href="../general/models.html">模型</a></li>';
    ciNav +=                                '<li><a href="../general/helpers.html">辅助函数</a></li>';
    ciNav +=                                '<li><a href="../general/libraries.html">使用 CodeIgniter 类库</a></li>';
    ciNav +=                                '<li><a href="../general/creating_libraries.html">创建类库</a></li>';
    ciNav +=                                '<li><a href="../general/drivers.html">使用 CodeIgniter 驱动器</a></li>';
    ciNav +=                                '<li><a href="../general/creating_drivers.html">创建驱动器</a></li>';
    ciNav +=                                '<li><a href="../general/core_classes.html">创建核心系统类</a></li>';
    ciNav +=                                '<li><a href="../general/ancillary_classes.html">创建附属类</a></li>';
    ciNav +=                                '<li><a href="../general/hooks.html">钩子 - 扩展框架核心</a></li>';
    ciNav +=                                '<li><a href="../general/autoloader.html">自动加载资源</a></li>';
    ciNav +=                                '<li><a href="../general/common_functions.html">公共函数</a></li>';
    ciNav +=                                '<li><a href="../general/compatibility_functions.html">兼容性函数</a></li>';
    ciNav +=                                '<li><a href="../general/routing.html">URI 路由</a></li>';
    ciNav +=                                '<li><a href="../general/errors.html">错误处理</a></li>';
    ciNav +=                                '<li><a href="../general/caching.html">网页缓存</a></li>';
    ciNav +=                                '<li><a href="../general/profiling.html">程序分析</a></li>';
    ciNav +=                                '<li><a href="../general/cli.html">以 CLI 方式运行</a></li>';
    ciNav +=                                '<li><a href="../general/managing_apps.html">管理你的应用程序</a></li>';
    ciNav +=                                '<li><a href="../general/environments.html">处理多环境</a></li>';
    ciNav +=                                '<li><a href="../general/alternative_php.html">在视图文件中使用 PHP 替代语法</a></li>';
    ciNav +=                                '<li><a href="../general/security.html">安全</a></li>';
    ciNav +=                                '<li><a href="../general/styleguide.html">PHP 开发规范</a></li>';
    ciNav +=                            '</ul>';
    ciNav +=                        '</td>';
    ciNav +=                        '<td valign="top" class="td_sep">';
    ciNav +=                            '<h3><a href="../libraries/index.html">类库参考</a></h3>';
    ciNav +=                            '<ul>';
    ciNav +=                                '<li><a href="../libraries/benchmark.html">基准测试类</a></li>';
    ciNav +=                                '<li><a href="../libraries/caching.html">缓存驱动器</a></li>';
    ciNav +=                                '<li><a href="../libraries/calendar.html">日历类</a></li>';
    ciNav +=                                '<li><a href="../libraries/cart.html">购物车类</a></li>';
    ciNav +=                                '<li><a href="../libraries/config.html">配置类</a></li>';
    ciNav +=                                '<li><a href="../libraries/email.html">Email 类</a></li>';
    ciNav +=                                '<li><a href="../libraries/encrypt.html">加密类</a></li>';
    ciNav +=                                '<li><a href="../libraries/encryption.html">加密类（新版）</a></li>';
    ciNav +=                                '<li><a href="../libraries/file_uploading.html">文件上传类</a></li>';
    ciNav +=                                '<li><a href="../libraries/form_validation.html">表单验证类</a></li>';
    ciNav +=                                '<li><a href="../libraries/ftp.html">FTP 类</a></li>';
    ciNav +=                                '<li><a href="../libraries/image_lib.html">图像处理类</a></li>';
    ciNav +=                                '<li><a href="../libraries/input.html">输入类</a></li>';
    ciNav +=                                '<li><a href="../libraries/javascript.html">Javascript 类</a></li>';
    ciNav +=                                '<li><a href="../libraries/language.html">语言类</a></li>';
    ciNav +=                                '<li><a href="../libraries/loader.html">加载器类</a></li>';
    ciNav +=                                '<li><a href="../libraries/migration.html">迁移类</a></li>';
    ciNav +=                                '<li><a href="../libraries/output.html">输出类</a></li>';
    ciNav +=                                '<li><a href="../libraries/pagination.html">分页类</a></li>';
    ciNav +=                                '<li><a href="../libraries/parser.html">模板解析类</a></li>';
    ciNav +=                                '<li><a href="../libraries/security.html">安全类</a></li>';
    ciNav +=                                '<li><a href="../libraries/sessions.html">Session 类</a></li>';
    ciNav +=                                '<li><a href="../libraries/table.html">HTML 表格类</a></li>';
    ciNav +=                                '<li><a href="../libraries/trackback.html">引用通告类</a></li>';
    ciNav +=                                '<li><a href="../libraries/typography.html">排版类</a></li>';
    ciNav +=                                '<li><a href="../libraries/unit_testing.html">单元测试类</a></li>';
    ciNav +=                                '<li><a href="../libraries/uri.html">URI 类</a></li>';
    ciNav +=                                '<li><a href="../libraries/user_agent.html">用户代理类</a></li>';
    ciNav +=                                '<li><a href="../libraries/xmlrpc.html">XML-RPC 与 XML-RPC 服务器类</a></li>';
    ciNav +=                                '<li><a href="../libraries/zip.html">Zip 编码类</a></li>';
    ciNav +=                            '</ul>';
    ciNav +=                        '</td>';
    ciNav +=                        '<td valign="top" class="td_sep">';
    ciNav +=                            '<h3><a href="../database/index.html">数据库参考</a></h3>';
    ciNav +=                            '<ul>';
    ciNav +=                                '<li><a href="../database/examples.html">数据库快速入门: 示例代码</a></li>';
    ciNav +=                                '<li><a href="../database/configuration.html">数据库配置</a></li>';
    ciNav +=                                '<li><a href="../database/connecting.html">连接数据库</a></li>';
    ciNav +=                                '<li><a href="../database/queries.html">查询</a></li>';
    ciNav +=                                '<li><a href="../database/results.html">生成查询结果</a></li>';
    ciNav +=                                '<li><a href="../database/helpers.html">查询辅助函数</a></li>';
    ciNav +=                                '<li><a href="../database/query_builder.html">查询构造器类</a></li>';
    ciNav +=                                '<li><a href="../database/transactions.html">事务</a></li>';
    ciNav +=                                '<li><a href="../database/metadata.html">获取元数据</a></li>';
    ciNav +=                                '<li><a href="../database/call_function.html">自定义函数调用</a></li>';
    ciNav +=                                '<li><a href="../database/caching.html">查询缓存</a></li>';
    ciNav +=                                '<li><a href="../database/forge.html">使用 Database Forge 维护数据库</a></li>';
    ciNav +=                                '<li><a href="../database/utilities.html">数据库工具类</a></li>';
    ciNav +=                                '<li><a href="../database/db_driver_reference.html">数据库驱动器参考</a></li>';
    ciNav +=                            '</ul>';
    ciNav +=                        '</td>';
    ciNav +=                        '<td valign="top" class="td_sep">';
    ciNav +=                            '<h3><a href="../helpers/index.html">辅助函数参考</a></h3>';
    ciNav +=                            '<ul>';
    ciNav +=                                '<li><a href="../helpers/array_helper.html">数组辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/captcha_helper.html">验证码辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/cookie_helper.html">Cookie 辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/date_helper.html">日期辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/directory_helper.html">目录辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/download_helper.html">下载辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/email_helper.html">邮件辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/file_helper.html">文件辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/form_helper.html">表单辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/html_helper.html">HTML 辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/inflector_helper.html">Inflector 辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/language_helper.html">语言辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/number_helper.html">数字辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/path_helper.html">路径辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/security_helper.html">安全辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/smiley_helper.html">表情辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/string_helper.html">字符串辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/text_helper.html">文本辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/typography_helper.html">排版辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/url_helper.html">URL 辅助函数</a></li>';
    ciNav +=                                '<li><a href="../helpers/xml_helper.html">XML 辅助函数</a></li>';
    ciNav +=                            '</ul>';
    ciNav +=                        '</td>';
    ciNav +=                    '</tr>';
    ciNav +=                '</table>';
    ciNav +=            '</div>';
    ciNav +=        '</div>';
    ciNav +=        '<div id="nav2">';
    ciNav +=            '<a name="top"></a>';
    ciNav +=            '<a href="#" id="openToc"><img src="data:image/jpg;base64,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" title="切换目录" alt="切换目录" /></a>';
    ciNav +=        '</div>';
    ciNav +=    '</div>';
    $('body').prepend(ciNav);
    //
    var a = ['Index', 'CodeIgniter 用户指南¶', '变更记录¶', 'Developer’s Certificate of Origin 1.1¶', 'The MIT License (MIT)¶'];
    if ($.inArray($('h1').text(), a) > 0 || window.location.pathname.indexOf('/search.html') >= 0)
    {
        $('table.ciNav a').each(function(){
            $(this).attr('href', $(this).attr("href").replace('../', ''));
        });
    }
    //
    $('#openToc').click(function(){
        $('#nav').slideToggle();
    });
    $('.wy-breadcrumbs').append('<div style="float:right;"><div style="text-decoration:underline;color:blue;margin-left:5px;cursor:pointer;" id="closeMe"><img title="目录" alt="toc" src="data:image/gif;base64,R0lGODlhFAAUAJEAAAAAADMzM////wAAACH5BAUUAAIALAAAAAAUABQAAAImlI+py+0PU5gRBRDM3DxbWoXis42X13USOLauUIqnlsaH/eY6UwAAOw==" /></div></div>');
    $('#closeMe').toggle(
        function()
        {
            setCookie('ciNav', true, 365);
            $('#nav2').show();
            $('#topMenu').remove();
            $('body').css({ background:'none' });
            $('.wy-nav-content-wrap').css({ background:'none', 'margin-left':0 });
            $('.wy-breadcrumbs').append('<div style="float:right;"><div style="float:left;" id="topMenu">'+$('.wy-form').parent().html()+'</div></div>');$('.wy-nav-side').toggle();
        },
        function()
        {
            setCookie('ciNav', false, 365);
            $('#topMenu').remove();
            $('#nav').hide();
            $('#nav2').hide();
            $('body').css({ background:'#edf0f2;' });
            $('.wy-nav-content-wrap').css({ background:'none repeat scroll 0 0 #fcfcfc;', 'margin-left':'300px' });
            $('.wy-nav-side').show();
        }
    );
    if (getCookie('ciNav') == 'true')
    {
        $('#closeMe').trigger('click');
        //$('#nav').slideToggle();
    }
    // END MODIFICATION ---
});

// Rufnex Cookie functions
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires+"; path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}
// End

window.SphinxRtdTheme = (function (jquery) {
    var stickyNav = (function () {
        var navBar,
            win,
            stickyNavCssClass = 'stickynav',
            applyStickNav = function () {
                if (navBar.height() <= win.height()) {
                    navBar.addClass(stickyNavCssClass);
                } else {
                    navBar.removeClass(stickyNavCssClass);
                }
            },
            enable = function () {
                applyStickNav();
                win.on('resize', applyStickNav);
            },
            init = function () {
                navBar = jquery('nav.wy-nav-side:first');
                win    = jquery(window);
            };
        jquery(init);
        return {
            enable : enable
        };
    }());
    return {
        StickyNav : stickyNav
    };
}($));
