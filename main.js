function calculate() {
    const MyName = document.getElementById("MyName").value;
    const YourName = document.getElementById("YourName").value;

    const startDate = new Date(document.getElementById("start-date").value);
    startDate.setDate(startDate.getDate() - 1);

    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000;

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    const days = Math.round(Math.abs((today - startDate) / oneDay));

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


    const monthSelect = document.getElementById("Mymonth");
    const daySelect = document.getElementById("Myday");

    const monthSelect2 = document.getElementById("Yourmonth");
    const daySelect2 = document.getElementById("Yourday");

    const selectedMonth = parseInt(monthSelect.value);
    const selectedDay = parseInt(daySelect.value);

    const selectedMonth2 = parseInt(monthSelect2.value);
    const selectedDay2 = parseInt(daySelect2.value);

    // 생일 날짜 만들기
    const MyBday = new Date(currentYear, selectedMonth - 1, selectedDay);
    const nextMyBday = new Date(currentYear + 1, selectedMonth - 1, selectedDay);
    const MyDiff_1 =
        Math.round((nextMyBday - today) / (1000 * 60 * 60 * 24));
    const MyDiff_2 =
        Math.round((MyBday - today) / (1000 * 60 * 60 * 24));


    const YourBday = new Date(currentYear, selectedMonth2 - 1, selectedDay2);
    const nextYourBday = new Date(currentYear + 1, selectedMonth2 - 1, selectedDay2);
    const YourDiff_1 =
        Math.round((nextYourBday - today) / (1000 * 60 * 60 * 24));
    const YourDiff_2 =
        Math.round((YourBday - today) / (1000 * 60 * 60 * 24));



    // 내 생일이 오늘인 경우
    if (
        selectedMonth === currentMonth &&
        selectedDay === currentDay
    ) {
        resultContainer.innerHTML += `<p class= "g_bday1">${MyName}님의 생일을 축하합니다.</p>`;
        document.body.style.backgroundImage = "url('bday.avif')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";

    }


    // 입력된 날짜가 현재 날짜보다 이전인 경우 내년 생일까지의 남은 일 수 계산
    else if (
        (selectedMonth < currentMonth) ||
        (selectedMonth === currentMonth && selectedDay < currentDay)
    ) {
        resultContainer.innerHTML += `<p class="g_bday2">${MyName}님의 생일 :  D-${MyDiff_1}</p>`;
    }

    // 입력된 날짜가 현재 날짜보다 나중인 경우 생일까지의 남은 일 수 계산
    else {
        resultContainer.innerHTML += `<p class="g_bday3">${MyName}님의 생일 : D-${MyDiff_2}</p>`;
    }


    if (
        selectedMonth2 === currentMonth &&
        selectedDay2 === currentDay
    ) {
        resultContainer.innerHTML += `<p class="b_bday1">${YourName}님의 생일을 축하합니다.</p>`;
        document.body.style.backgroundImage = "url('bday.avif')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";

    } else if (
        (selectedMonth2 < currentMonth) ||
        (selectedMonth2 === currentMonth && selectedDay < currentDay)
    ) {
        resultContainer.innerHTML += `<p class="B_bday2">${YourName}님의 생일 :  D-${YourDiff_1}</p>`;
    } else {
        resultContainer.innerHTML += `<p class="B_bday3">${YourName}님의 생일 : D-${YourDiff_2}</p>`;

    }

    if (hDayDiff === 0) {
        resultContainer.innerHTML += `<p class="anv-100">${MyName}🤍${YourName} 100일을 축하합니다!</p>`;
        document.body.style.backgroundImage = "url('aniv.jpg')";
    } else if (hDayDiff < 0) {
        resultContainer.innerHTML += `<p>100일이 이미 지났습니다!</p>`;
    } else {
        resultContainer.innerHTML += `<p>100일 : ${hDays.toLocaleDateString('ko-KR', options)} D-${hDayDiff}</p>`;
    }

    if (thDaysDiff === 0) {
        resultContainer.innerHTML += `<p class="anv-200">${MyName}🤍${YourName} 200일을 축하합니다!</p>`;
        document.body.style.backgroundImage = "url('aniv.jpg')";

    } else if (thDaysDiff < 0) {
        resultContainer.innerHTML += "<p>200일이 이미 지났습니다!</p>";
    } else {
        resultContainer.innerHTML += `<p>200일 : ${thDays.toLocaleDateString('ko-KR', options)} D-${thDaysDiff}</p>`;
    }

    if (oneYearDiff === 0) {
        resultContainer.innerHTML += `<p class="anv-1year">${MyName}🤍${YourName} 1주년을 축하합니다!</p>`;
        document.body.style.backgroundImage = "url('aniv.jpg')";



    } else if (oneYearDiff < 0) {
        resultContainer.innerHTML += "<p>1주년이 이미 지났습니다!</p>";
    } else {
        resultContainer.innerHTML += `<p>1주년 :  ${oneYear.toLocaleDateString('ko-KR', options)} D-${oneYearDiff}</p>`;
    }

    if (twoYearsDiff === 0) {
        resultContainer.innerHTML += `<p class="anv-2year">${MyName}🤍${YourName} 2주년을 축하합니다!</p>`;
        document.body.style.backgroundImage = "url('aniv.jpg')";

    } else if (oneYearDiff < 0) {
        resultContainer.innerHTML += "<p>2주년이 이미 지났습니다!</p>";
    } else {
        resultContainer.innerHTML += `<p>2주년 : ${twoYears.toLocaleDateString('ko-KR', options)} D-${twoYearsDiff}</p>`;
    }
}