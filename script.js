document.getElementById('form').addEventListener('submit', submitform)
var data, toarray
var rawdata = []
var cibelow0 = []
var ci0_10 = []
var ci10_20 = []
var ci20_30 = []
var ci30_40 = []
var ci40_50 = []
var ci50_60 = []
var ci60_70 = []
var ci70_80 = []
var ci80_90 = []
var ci90_100 = []
var ciabove100 = []

function submitform(e) {
    e.preventDefault()
    data = document.getElementById('data').value
    toarray = data.split(',')
    for (i = 0; i < toarray.length; i++) {
        rawdata[i] = parseInt(toarray[i])
    }

    for (var i = 0; i < rawdata.length; i++) {
        var temp = rawdata[i]
        if (temp < 0) {
            cibelow0.push(temp)
        }
        if (temp >= 0 && temp < 10) {
            ci0_10.push(temp)
        }
        if (temp >= 10 && temp < 20) {
            ci10_20.push(temp)
        }
        if (temp >= 20 && temp < 30) {
            ci20_30.push(temp)
        }
        if (temp >= 30 && temp < 40) {
            ci30_40.push(temp)
        }
        if (temp >= 40 && temp < 50) {
            ci40_50.push(temp)
        }
        if (temp >= 50 && temp < 60) {
            ci50_60.push(temp)
        }
        if (temp >= 60 && temp < 70) {
            ci60_70.push(temp)
        }
        if (temp >= 70 && temp < 80) {
            ci70_80.push(temp)
        }
        if (temp >= 80 && temp < 90) {
            ci80_90.push(temp)
        }
        if (temp >= 90 && temp < 100) {
            ci90_100.push(temp)
        }
        if (temp >= 100) {
            ciabove100.push(temp)
        }
    }

    document.getElementById('table').innerHTML =
        '<table>' +

        '<tr>' +
        '<th>' + 'CLASS INTERVALS' + '</th>' + '<th>' + 'FREQUENCY' + '</th>' +
        '</tr>' +

        '<tr>' +
        '<td>' + 'Below 0' + '</td>' + '<td>' + cibelow0.length + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + '0-10' + '</td>' + '<td>' + ci0_10.length + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + '10-20' + '</td>' + '<td>' + ci10_20.length + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + '20-30' + '</td>' + '<td>' + ci20_30.length + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + '30-40' + '</td>' + '<td>' + ci30_40.length + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + '40-50' + '</td>' + '<td>' + ci40_50.length + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + '50-60' + '</td>' + '<td>' + ci50_60.length + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + '60-70' + '</td>' + '<td>' + ci60_70.length + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + '70-80' + '</td>' + '<td>' + ci70_80.length + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + '80-90' + '</td>' + '<td>' + ci80_90.length + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + '90-100' + '</td>' + '<td>' + ci90_100.length + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + '100 and above' + '</td>' + '<td>' + ciabove100.length + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' + 'Total: ' + '</td>' + '<td>' + rawdata.length + '</td>' +
        '</tr>' +

        '</table'
    cibelow0.length = 0
    ci0_10.length = 0
    ci10_20.length = 0
    ci20_30.length = 0
    ci30_40.length = 0
    ci40_50.length = 0
    ci50_60.length = 0
    ci60_70.length = 0
    ci70_80.length = 0
    ci80_90.length = 0
    ci90_100.length = 0
    ciabove100.length = 0
}