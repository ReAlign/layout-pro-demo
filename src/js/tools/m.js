const M = {
    VARS: {
        layouthistory: null,
        currentDocument: null,
        timerSave: 1000,
        stopsave: 0,
        startdrag: 0,
        demoHtml: $('.demo').html(),
        currenteditor: null,
        contenthandle: null
    }
};

M.clearDemo = () => {
    $('.demo').empty();
    M.VARS.layouthistory = null;
    if(M.supportstorage()) {
        window.localStorage.removeItem('layoutdata');
    }
};
M.supportstorage = () => typeof window.localStorage === 'object';
M.handleSaveLayout = () => {
    let e = $('.demo').html();
    if(!M.VARS.stopsave && e != M.VARS.demoHtml) {
        M.VARS.stopsave++;
        M.VARS.demoHtml = e;
        M.saveLayout();
        M.VARS.stopsave--;
    }
};
M.saveLayout = () => {
    let data = M.VARS.layouthistory;
    if (!data) {
        data = {};
        data.count = 0;
        data.list = [];
    }
    if (data.list.length > data.count) {
        for (let i = data.count; i < data.list.length; i++) {
            data.list[i] = null;
        }
    }
    data.list[data.count] = M.VARS.demoHtml;
    data.count++;
    if (M.supportstorage()) {
        window.localStorage.setItem('layoutdata', JSON.stringify(data));
    }
    M.VARS.layouthistory = data;
};
M.downloadLayout = () => {
    $.ajax({
        type: 'POST',
        url: '/build/downloadLayout',
        data: {
            layout: $('#download-layout').html()
        },
        success(data) {
            console.log(data);
            window.location.href = '/build/download';
        }
    });
};
M.downloadHtmlLayout = () => {
    $.ajax({
        type: 'POST',
        url: '/build/downloadLayout',
        data: {
            layout: $('#download-layout').html()
        },
        success(data) {
            console.log(data);
            window.location.href = '/build/downloadHtml';
        }
    });
};
M.undoLayout = () => {
    let data = M.VARS.layouthistory;
    //console.log(data);
    if (data) {
        if (data.count < 2) {
            return false;
        }
        M.VARS.demoHtml = data.list[data.count - 2];
        data.count--;
        $('.demo').html(M.VARS.demoHtml);
        if (M.supportstorage()) {
            window.localStorage.setItem('layoutdata', JSON.stringify(data));
        }
        return true;
    }
    return false;
};
M.redoLayout = () => {
    let data = M.VARS.layouthistory;
    if (data) {
        if (data.list[data.count]) {
            M.VARS.demoHtml = data.list[data.count];
            data.count++;
            $('.demo').html(M.VARS.demoHtml);
            if (M.supportstorage()) {
                window.localStorage.setItem('layoutdata', JSON.stringify(data));
            }
            return true;
        }
    }
    return false;
};
M.handleJsIds = () => {
    M.handleModalIds();
    M.handleAccordionIds();
    M.handleCarouselIds();
    M.handleTabsIds();
};
M.handleAccordionIds = () => {
    let e = $('.demo #myAccordion');
    let t = M.randomNumber();
    let n = `accordion-${t}`;
    let r;
    e.attr('id', n);
    e.find('.accordion-group').each((e, t) => {
        r = `accordion-element-${M.randomNumber()}`;
        $(t).find('.accordion-toggle').each((e, t) => {
            $(t).attr('data-parent', `#${n}`);
            $(t).attr('href', `#${r}`);
        });
        $(t).find('.accordion-body').each((e, t) => {
            $(t).attr('id', r);
        });
    });
};
M.handleCarouselIds = () => {
    let e = $('.demo #myCarousel');
    let t = M.randomNumber();
    let n = `carousel-${t}`;
    e.attr('id', n);
    e.find('.carousel-indicators li').each((e, t) => {
        $(t).attr('data-target', `#${n}`);
    });
    e.find('.left').attr('href', `#${n}`);
    e.find('.right').attr('href', `#${n}`);
};
M.handleModalIds = () => {
    let e = $('.demo #myModalLink');
    let t = M.randomNumber();
    let n = `modal-container-${t}`;
    let r = `modal-${t}`;
    e.attr('id', r);
    e.attr('href', `#${n}`);
    e.next().attr('id', n);
};
M.handleTabsIds = () => {
    let e = $('.demo #myTabs');
    let t = M.randomNumber();
    let n = `tabs-${t}`;
    e.attr('id', n);
    e.find('.tab-pane').each((e, t) => {
        let n = $(t).attr('id');
        let r = `panel-${M.randomNumber()}`;
        $(t).attr('id', r);
        $(t).parent().parent().find(`a[href=#${n}]`).attr('href', `#${r}`);
    });
};
M.randomNumber = () => M.randomFromInterval(1, 1e6);
M.randomFromInterval = (e, t) => Math.floor(Math.random() * (t - e + 1) + e);
M.gridSystemGenerator = () => {
    $('.lyrow .preview input').bind('keyup', () => {
        let e = 0;
        let t = '';
        let n = $(this).val().split(' ', 12);
        $.each(n, (n, r) => {
            e = e + parseInt(r);
            t += `<div class="span${r} column"></div>`;
        });
        if (e == 12) {
            $(this).parent().next().children().html(t);
            $(this).parent().prev().show();
        } else {
            $(this).parent().prev().hide();
        }
    });
};
M.configurationElm = () => {
    $('.demo').delegate('.configuration > a', 'click', function(e) {
        e.preventDefault();
        let t = $(this).parent().next().next().children();
        $(this).toggleClass('active');
        t.toggleClass($(this).attr('rel'));
    });
    $('.demo').delegate('.configuration .dropdown-menu a', 'click', function(e) {
        e.preventDefault();
        let t = $(this).parent().parent();
        let n = t.parent().parent().next().next().children();
        t.find('li').removeClass('active');
        $(this).parent().addClass('active');
        let r = '';
        t.find('a').each(() => {
            r += `${$(this).attr('rel')} `;
        });
        t.parent().removeClass('open');
        n.removeClass(r);
        n.addClass($(this).attr('rel'));
    });
};
M.removeMenuClasses = () => {
    $('#menu-layoutit li button').removeClass('active');
};
M.changeStructure = (e, t) => {
    $(`#download-layout .${e}`).removeClass(e).addClass(t);
};
M.cleanHtml = function(e) {
    $(e).parent().append($(e).children().html());
};
M.downloadLayoutSrc = function() {
    let a = $('.demo').html();
    $('#download-layout').children().html(a);
    let t = $('#download-layout').children();
    t.find('.preview, .configuration, .drag, .remove').remove();
    t.find('.lyrow').addClass('removeClean');
    t.find('.box-element').addClass('removeClean');
    t.find('.lyrow .lyrow .lyrow .lyrow .lyrow .removeClean').each(function() {
        M.cleanHtml(this);
    });
    t.find('.lyrow .lyrow .lyrow .lyrow .removeClean').each(function() {
        M.cleanHtml(this);
    });
    t.find('.lyrow .lyrow .lyrow .removeClean').each(function() {
        M.cleanHtml(this);
    });
    t.find('.lyrow .lyrow .removeClean').each(function() {
        M.cleanHtml(this);
    });
    t.find('.lyrow .removeClean').each(function() {
        M.cleanHtml(this);
    });
    t.find('.removeClean').each(function() {
        M.cleanHtml(this);
    });
    t.find('.removeClean').remove();
    $('#download-layout .column').removeClass('ui-sortable');
    $('#download-layout .row-fluid').removeClass('clearfix').children().removeClass('column');
    if ($('#download-layout .container').length) {
        M.changeStructure('row-fluid', 'row');
    }
    const _opt = {
        format: true,
        allowedAttributes: [
            ['id'],
            ['class'],
            ['data-toggle'],
            ['data-target'],
            ['data-parent'],
            ['role'],
            ['data-dismiss'],
            ['aria-labelledby'],
            ['aria-hidden'],
            ['data-slide-to'],
            ['data-slide']
        ]
    };
    const formatSrc = $.htmlClean($('#download-layout').html(), _opt);
    $('#download-layout').html(formatSrc);
    $('#downloadModal textarea').empty();
    return formatSrc;
};

// 还原LS数据
M.restoreData = () => {
    if(M.supportstorage()) {
        M.VARS.layouthistory = JSON.parse(window.localStorage.getItem('layoutdata'));
        if(!M.VARS.layouthistory) {
            return false;
        }
        M.VARS.demoHtml = M.VARS.layouthistory.list[M.VARS.layouthistory.count - 1];
        if(M.VARS.demoHtml) {
            $('.demo').html(M.VARS.demoHtml);
        }
    }
};

// 初始化容器
M.initContainer = () => {
    $('.demo, .demo .column').sortable({
        connectWith: '.column',
        opacity: .35,
        handle: '.drag',
        start: M._draggableStart,
        stop: M._draggableStop
    });
    M.configurationElm();
};

// 更新全局样式
M.updateGlobalStyles = () => {
    $('body').css('min-height', $(window).height() - 90);
    $('.demo').css('min-height', $(window).height() - 160);
};

M.ready = () => {
    $(window).resize(() => {
        M.updateGlobalStyles();
    });
    $(document).ready(() => {
        // if(CKEDITOR) {
        //     CKEDITOR.disableAutoInline = true;
        //     M.VARS.contenthandle = CKEDITOR.replace('contenteditor', {
        //         language: 'zh-cn',
        //         // contentsCss: ['css/bootstrap-combined.min.css'],
        //         allowedContent: true
        //     });
        // }

        // 还原LS数据
        M.restoreData();
        // 更新全局样式
        M.updateGlobalStyles();

        $('.sidebar-nav .lyrow').draggable({
            connectToSortable: '.demo',
            helper: 'clone',
            handle: '.drag',
            start: M._draggableStart,
            drag: M._draggableDrag,
            stop() {
                $('.demo .column').sortable({
                    opacity: .35,
                    connectWith: '.column',
                    start: M._draggableStart,
                    stop: M._draggableStop
                });
                M._draggableStop();
            }
        });
        $('.sidebar-nav .box').draggable({
            connectToSortable: '.column',
            helper: 'clone',
            handle: '.drag',
            start: M._draggableStart,
            drag: M._draggableDrag,
            stop() {
                M.handleJsIds();
                M._draggableStop();
            }
        });
        // 初始化容器
        M.initContainer();
        // 编辑弹窗
        $('body.edit .demo').on('click', '[data-target=#editorModal]', M._onEditorModal);
        // 保存
        $('#savecontent').click(M._onSaveContent);
        // 分享弹窗
        $('[data-target=#shareModal]').click(M._onShareModal);
        // 下载
        $('#download').click(M._onDownload);
        // 下载html
        $('#downloadhtml').click(M._onDownloadHtml);
        // 自适应宽度
        $('#fluidPage').click(M._onFluidPage);
        // 固定宽度
        $('#fixedPage').click(M._onFixedPage);
        // 左侧菜单动效
        $('.nav-header').click(function() {
            $('.sidebar-nav .boxes, .sidebar-nav .rows').hide();
            $(this).next().slideDown();
        });
        // 移除事件委托
        $('.demo').delegate('.remove', 'click', M._onDemoRemove);
        M.gridSystemGenerator();
        setInterval(() => {
            M.handleSaveLayout();
        }, M.VARS.timerSave);
    });
};

/************ 绑定事件集合 begin ************/
M._draggableStart = () => {
    if(!M.VARS.startdrag) {
        M.VARS.stopsave++;
    }
    M.VARS.startdrag = 1;
};
M._draggableDrag = (e, t) => {
    t.helper.width(400);
};
M._draggableStop = () => {
    if(M.VARS.stopsave > 0) {
        M.VARS.stopsave--;
    }
    M.VARS.startdrag = 0;
};
M._onEditorModal = function(e) {
    e.preventDefault();
    M.VARS.currenteditor = $(this).parent().parent().find('.view');
    const eText = M.VARS.currenteditor.html();
    M.VARS.contenthandle.setData(eText);
};
M._onSaveContent = (e) => {
    e.preventDefault();
    M.VARS.currenteditor.html(M.VARS.contenthandle.getData());
};
M._onDownoadModal = function() {
    // e.preventDefault();
    return M.downloadLayoutSrc();
};
M._onShareModal = (e) => {
    e.preventDefault();
    M.handleSaveLayout();
};
M._onDownload = () => {
    M.downloadLayout();
    return false;
};
M._onDownloadHtml = () => {
    M.downloadHtmlLayout();
    return false;
};
M._onFluidPage = function(e) {
    e.preventDefault();
    M.changeStructure('container', 'container-fluid');
    $('#fixedPage').removeClass('active');
    $(this).addClass('active');
    M.downloadLayoutSrc();
};
M._onFixedPage = function(e) {
    e.preventDefault();
    M.changeStructure('container-fluid', 'container');
    $('#fluidPage').removeClass('active');
    $(this).addClass('active');
    M.downloadLayoutSrc();
};
M._onUndo = () => {
    M.VARS.stopsave++;
    if(M.undoLayout()) {
        M.initContainer();
    }
    M.VARS.stopsave--;
};
M._onRedo = () => {
    M.VARS.stopsave++;
    if(M.redoLayout()) {
        M.initContainer();
    }
    M.VARS.stopsave--;
};
M._onDemoRemove = function(e) {
    e.preventDefault();
    $(this).parent().remove();
    if (!$('.demo .lyrow').length > 0) {
        M.clearDemo();
    }
};
/************ 绑定事件集合 end ************/

export default M;