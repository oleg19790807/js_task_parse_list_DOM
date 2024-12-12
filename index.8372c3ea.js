function r(r){return parseInt(r.dataset.salary,10)}var a,e=document.querySelector("#employee-list");(a=Array.from(e.children)).sort(function(a,e){return r(e)-r(a)}),a.forEach(function(r){return e.appendChild(r)}),Array.from(e.children).map(function(a){return{name:a.dataset.name,position:a.dataset.position,salary:r(a),age:parseInt(a.dataset.age,10)}});
//# sourceMappingURL=index.8372c3ea.js.map
