(function () {
    var iters = 100000
    function test(func) {
        var t0 = performance.now()
        for (var i = 0; i < iters; i++) {
            func()
        }
        return performance.now() - t0
    }

    function eval_test(code) {
        return test(eval.bind(this, code)) 
    }


    $$('#profile').addEventListener('click', function () {
        eval($$('#setup').value)
        
        var test1Code = $$('#test1').value 
        var test2Code = $$('#test2').value 

        console.log(eval_test(test1Code))
        console.log(eval_test(test2Code))
    })  

/** Example Tests: */
/*
    console.log(test(function() {
        var els = document.getElementById('test').getElementsByClassName('.test')
        var results = []
        for (var x = 0; x < els.length; x++) {
           results.push(x.getElementsByTagName('a'))
        }
    }))
    console.log(test(function() {
        $$('#test .test a')
    }))
    console.log(test(function() {
        $('#test .test a')
    }))

*/
})()
