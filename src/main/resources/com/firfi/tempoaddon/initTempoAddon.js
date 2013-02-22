(function($) {

    JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
        var run = false;
        var percentTdIndex = undefined;
        jQuery('.tempo-timesheet-table .sublog').each( function(k, v) {
            run = true;
            var mainclass = "mainlog"+/sublog(-[0-9]*)/.exec(v.className)[1];
            var total = jQuery(jQuery("#"+mainclass + " .userTotal")[0]).text().trim();
            var tds = jQuery(this).find('td');
            // we should find first 'hours' td and remember its position for headers corrections
            var localsumtd = undefined;
            tds.each(function(k, v) {
                var td = jQuery(v);
                if (td.hasClass('hours')) {
                    localsumtd = td;
                    percentTdIndex = k + 1;
                    return false;
                }
                return true;
            })
            var local = localsumtd.text().trim();
            var percent = parseFloat((local/total*100).toFixed(2));
            localsumtd.after(jQuery('<td/>').text(percent));
        });
        console.warn(percentTdIndex)
        if (run) {

            // most hight head and three foots
            var t = jQuery('#issuetable');
            var dates_head_and_foots = jQuery(t.find('tr.rowHeader'));
            dates_head_and_foots.each(function(k, v) {
                var h = jQuery(v).find('th').first();
                h.attr('colspan', 1 + parseInt(h.attr('colspan')));
            });


            var titles_head = jQuery(t.find('tr.rowHeader')[1]);
            var thToAppend = jQuery(titles_head.find('th')[percentTdIndex - 1]);
            thToAppend.after(jQuery('<th/>').text('%'));

            var user_trs = jQuery('tr.mainlog');
            user_trs.each(function(k, v) {
                jQuery(jQuery(v).find('td')[percentTdIndex - 2]).after(jQuery('<td/>').text('100'))
            });
        }
    });

})(AJS.$);