/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

var citySelected = document.getElementById('city-select');
var timeSelected = document.getElementsByName("gra-time");


// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  console.dir(returnData);
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

console.dir(aqiSourceData);

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: 0,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
  var strHTML = '';
  var height = '';
  // for( key in aqiSourceData ) {
    for( index in aqiSourceData['北京']) {
      strHTML += '<div style="width:6px;height:' 
      + aqiSourceData['北京'][index] + 'px;background-color:' 
      + randomColor() + ';" title="当前城市：北京，时间：' + index + ' ，空气污染指数：' + aqiSourceData['北京'][index] + '"></div>';
    }
  // }
  document.getElementById('js_aqi-chart-wrap').innerHTML = strHTML;
}

/* 随机颜色 */ 
function randomColor() {
  return "#" + Math.random().toString(16).substring(2, 8);
}

renderChart();
/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 
  for (var i = 0; i < timeSelected.length; i++) {
    if(timeSelected[i].checked) {
      if(pageState.nowGraTime != timeSelected[i].value){
          pageState.nowGraTime = timeSelected[i].value;
          console.log(pageState);
      } else {
          return;
      }
    }
  }
  
  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 
  if(pageState.nowSelectCity != citySelected.selectedIndex){
      pageState.nowSelectCity = citySelected.selectedIndex;
      console.log(pageState);
  } else {
      return;
  }
  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
  for (var i = 0; i < timeSelected.length; i++) {
    timeSelected[i].onclick = function() {
      graTimeChange();
    }
  }
  
}
initGraTimeForm();

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var strCityHTML = '';
  var i = 0;
  for( index in aqiSourceData) { 
   strCityHTML += '<option value="' + ( i++ ) + '">' + index + '</option>';
  }
   citySelected.innerHTML = strCityHTML;
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  citySelected.onclick = function() {
    citySelectChange();
  }

}
initCitySelector();

Array.prototype.S=String.fromCharCode(2);
Array.prototype.in_array=function(e){
  var r=new RegExp(this.S+e+this.S);
  return (r.test(this.S+this.join(this.S)+this.S));
};

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  // chartData = aqiSourceData[pageState.nowSelectCity];
  // 
  /* 数据格式演示
  var aqiSourceData = {
    "北京": {
      "month": {
        "2016-01": 10,
        "2016-02": 10,
        "2016-03": 10
      },
      "week"：{
        "2016-01-01": 10, // 第一周
        "2016-01-02": 10,
        "2016-01-03": 10,
        "2016-01-04": 10
      },
      "days": {
        "2016-01-01": 10,
        "2016-01-02": 10,
        "2016-01-03": 10,
        "2016-01-04": 10  
      }
    }
  };
  */
 
  /* 数据格式演示
  var aqiSourceData = {
    "北京": {
      "2016-01-01": 10,
      "2016-01-02": 10,
      "2016-01-03": 10,
      "2016-01-04": 10
    }
  };
  */
  // var chartData = {};
  // var month = [];
  // var i = 0;
  // var count = 0;
  // var count2 = 0;

  // for(var k in aqiSourceData) {
  //   for(var m in aqiSourceData[k]) {
  //     console.log(m.indexOf('-01-'));
  //     if (m.indexOf('-01-') != -1) {
  //       count = parseInt(count + aqiSourceData[k][m]);
  //     } else if (m.indexOf('-02-') != -1) {
  //       count2 = parseInt(count2 + aqiSourceData[k][m]);
  //     }
  //   }
  // }

  // console.log(m + '--------------='+ count);
}
initAqiChartData();
/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();