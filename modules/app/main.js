var tpl = __inline('./main.tmpl');
var _ = require('underscore')
var $ = require('zepto')
$('body').append(tpl({kinds:[
    {"name":1},
    {"name":2},
    {"name":3},
    {"name":4},
    {"name":5},
    {"name":6},
    {"name":7},
    {"name":8},
    {"name":9}
]}))
