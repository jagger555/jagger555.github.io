// 当前时间
var now = new Date();

function createTime() {
    // 每次调用时增加 1 秒
    now.setTime(now.getTime() + 1000);

    // 网站运行起始时间
    var startTime = new Date("08/01/2022 00:00:00");

    // 旅行者 1 号距离计算（基础数值 + 时间增量）
    var distance = Math.trunc(234e8 + (now - startTime) / 1000 * 17);
    var au = (distance / 1496e5).toFixed(6); // 换算为天文单位

    // 网站运行时间
    var launchTime = new Date("08/09/2022 00:00:00");
    var diff = (now - launchTime) / 1000; // 秒差
    var days = Math.floor(diff / 86400);
    var hours = Math.floor(diff / 3600) - 24 * days;
    var minutes = Math.floor(diff / 60) - 1440 * days - 60 * hours;
    var seconds = Math.round(diff - 86400 * days - 3600 * hours - 60 * minutes);

    // 当前时间电子钟
    var currentTime = now.toLocaleTimeString('zh-CN', { hour12: false });

    // 补零
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // 构建内容
    let content = `
    <div style="text-align:center; font-family:'Consolas','Courier New',monospace;">
      <div style="font-size:22px; font-weight:bold; margin-bottom:8px;">
        🕒 当前时间：<span style="color:#00c3ff;">${currentTime}</span>
      </div>
      <div style="font-size:16px; font-weight:bold; margin-top:6px;">
        本站已运行 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒
        <i id="heartbeat" class='fas fa-heartbeat' style="color:red;"></i>
      </div>
      <div style="font-size:16px; margin-top:4px;">
        旅行者 1 号当前距离地球约 <b>${distance.toLocaleString()}</b> 千米，
        约为 <b>${au}</b> 个天文单位 🚀
      </div>
    </div>`;

    const workboard = document.getElementById("workboard");
    if (workboard) workboard.innerHTML = content;
}

// 每秒更新一次
setInterval(createTime, 1000);
