            $(function () {
                $('#datetimepicker1').datetimepicker({
               minDate:'2020/01/01',
               maxDate:'2021/07/31',
               disabledDates:['2020/01/03','2020/01/17','2020/01/19','2020/05/04','2020/06/07'],
            dayViewHeaderFormat: 'YYYY年 MMMM',
            tooltips: {
                close: '閉じる',
                selectMonth: '月を選択',
                prevMonth: '前月',
                nextMonth: '次月',
                selectYear: '年を選択',
                prevYear: '前年',
                nextYear: '次年',
                selectTime: '時間を選択',
                selectDate: '日付を選択',
                prevDecade: '前期間',
                nextDecade: '次期間',
                selectDecade: '期間を選択',
                prevCentury: '前世紀',
                nextCentury: '次世紀'
            },
            format: 'YYYYMMDD',
            locale: 'ja',
            showClose: true
        });
            });