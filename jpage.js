function jpage (indexPage, totalPages) {
    console.log('jpage');
    console.log(indexPage, totalPages);
    var paginationNumbers = 0;
    function jpageResponse (start, end) {
        var pagination = [];
        if (start > 10) {
            pagination.push({
                value: indexPage - 1,
                label: '<<'
            });
        }
        for (var i = start; i <= end; i++) {
            var v = i;
            indexPage == i && (v = '#');
            pagination.push({
                value: v,
                label: i
            })
        }
        if (end < totalPages) {
            pagination.push({
                value: end + 1,
                label: '>>'
            });
        }
        return pagination;
    }
    if (totalPages < 10 ) {
        return jpageResponse(paginationNumbers+1, paginationNumbers+10)
    }
    var numberIndexPage = Math.floor(indexPage/10), numberTotalPages = Math.floor(totalPages/10);
    if ( numberIndexPage != numberTotalPages ) {
        if (indexPage%10 == 0) {
            paginationNumbers = (numberIndexPage-1) * 10;
            return jpageResponse(paginationNumbers+1, paginationNumbers+10);
        } else {
            paginationNumbers = (numberIndexPage) * 10;
            return jpageResponse(paginationNumbers+1, paginationNumbers+10);
        }
    } else {
        if (indexPage%10 == 0) {
            paginationNumbers = (numberIndexPage-1) * 10;
            return jpageResponse(paginationNumbers+1, paginationNumbers+10);
        } else {
            var modSobrante = totalPages%10;
            return jpageResponse(((numberIndexPage*10 )+1), (modSobrante+(numberIndexPage*10)));
        }
    }
}
