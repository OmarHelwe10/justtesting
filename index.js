fetch('https://renderapi-72nj.onrender.com/data')
       .then(response => response.json())
       .then(json => {
        for (let i = 0; i < json.length; i++) {
            var content=`<div class="member">
            <div class="member-img">
            <img src="${json[i].Photo}" class="img-fluid" alt="">
            <div class="social">
              <a href=""><i class="bi bi-twitter"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
            <div class="member-info" >
            <h4>${json[i].FirstName} ${json[i].LastName}</h4>
            <span>${json[i].Job}</span>
          </div>`;
var div=document.createElement('div');
div.innerHTML=content;
div.className='col-lg-3 col-md-6 d-flex align-items-stretch';
          document.getElementById('row').appendChild(div);
          



        }
    });