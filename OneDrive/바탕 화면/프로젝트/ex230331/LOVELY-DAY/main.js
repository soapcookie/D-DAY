function calculate() {
    const MyName = document.getElementById("MyName").value;
    const YourName = document.getElementById("YourName").value;

    const startDate = new Date(document.getElementById("start-date").value);
    startDate.setDate(startDate.getDate() - 1);

    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000;

    const days = Math.round(Math.abs((today - startDate) / oneDay));

    const MyBday = new Date(document.getElementById("MyBday").value);
    const YourBday = new Date(document.getElementById("YourBday").value);

    const MyBdayDiff = Math.round((MyBday - today) / oneDay);
    const YourBdayDiff = Math.round((YourBday - today) / oneDay);

    const hDays = new Date(startDate.getTime() + 100 * oneDay);
    const hDayDiff = Math.round((hDays - today) / oneDay);

    const thDays = new Date(startDate.getTime() + 200 * oneDay);
    const thDaysDiff = Math.round((thDays - today) / oneDay);

    const oneYear = new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDate());
    const oneYearDiff = Math.round((oneYear - today) / oneDay);

    const twoYears = new Date(startDate.getFullYear() + 2, startDate.getMonth(), startDate.getDate());
    const twoYearsDiff = Math.round((twoYears - today) / oneDay);

    const result = document.getElementById("result");
    const calculateButton = document.getElementById("mybtn");
    const inputContainer = document.getElementById("input");
    const resultContainer = document.getElementById("result");

    const date = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };


    const formatedDate = date.toLocaleDateString('ko-KR', options);
    resultContainer.innerHTML = `<p>오늘까지 ${days}일</p>`;


    if (MyBdayDiff == 0) {
        resultContainer.innerHTML += `<p class="g_bday">${MyName}님의 생일을 축하합니다.</p>`;
        document.body.style.backgroundImage = "url('bday.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    } else if (MyBdayDiff < 0) {
        resultContainer.innerHTML += `<p>${MyName}의 생일이 이미 지났습니다.</p>`
    } else {
        resultContainer.innerHTML += `<p>${MyName} 생일 : D-${MyBdayDiff}</p>`;
    }

    if (YourBdayDiff === 0) {
        resultContainer.innerHTML += `<p class="b_bday">${YourName}님의 생일을 축하합니다.</p>`;
        document.body.style.backgroundImage = "url('bday.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    } else if (YourBdayDiff < 0) {
        resultContainer.innerHTML += `<p>${YourName}의 생일이 이미 지났습니다.</p>`
    } else {
        resultContainer.innerHTML += `<p>${YourName} 생일 : D-${YourBdayDiff}</p>`;
    }




    if (hDayDiff === 0) {
        resultContainer.innerHTML += `<p class="anv-100">${MyName}🤍${YourName} 100일을 축하합니다!</p>`;
        document.body.style.backgroundImage = "url('100.jpg')";
    } else if (hDayDiff < 0) {
        resultContainer.innerHTML += `<p>100일이 이미 지났습니다!</p>`;
    } else {
        resultContainer.innerHTML += `<p>100일 : ${hDays.toLocaleDateString('ko-KR', options)} D-${hDayDiff}</p>`;
    }

    if (thDaysDiff === 0) {
        resultContainer.innerHTML += `<p class="anv-200">${MyName}🤍${YourName} 200일을 축하합니다!</p>`;
        document.body.style.backgroundImage = "url('200.jpg')";

    } else if (thDaysDiff < 0) {
        resultContainer.innerHTML += "<p>200일이 이미 지났습니다!</p>";
    } else {
        resultContainer.innerHTML += `<p>200일 : ${thDays.toLocaleDateString('ko-KR', options)} D-${thDaysDiff}</p>`;
    }

    if (oneYearDiff === 0) {
        resultContainer.innerHTML += `<p class="anv-1year">${MyName}🤍${YourName} 1주년을 축하합니다!</p>`;
        document.body.style.backgroundImage = "url('1.jpg')";

    } else if (oneYearDiff < 0) {
        resultContainer.innerHTML += "<p>1주년이 이미 지났습니다!</p>";
    } else {
        resultContainer.innerHTML += `<p>1주년 :  ${oneYear.toLocaleDateString('ko-KR', options)} D-${oneYearDiff}</p>`;
    }

    if (twoYearsDiff === 0) {
        resultContainer.innerHTML += `<p class="anv-2year">${MyName}🤍${YourName} 2주년을 축하합니다!</p>`;
        document.body.style.backgroundImage = "url('2.jpg')";

    } else if (oneYearDiff < 0) {
        resultContainer.innerHTML += "<p>2주년이 이미 지났습니다!</p>";
    } else {
        resultContainer.innerHTML += `<p>2주년 : ${twoYears.toLocaleDateString('ko-KR', options)} D-${twoYearsDiff}</p>`;
    }

}