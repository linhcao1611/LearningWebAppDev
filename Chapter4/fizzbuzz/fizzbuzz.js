//Coder : Kourun Sok, Linh Cao
// make fizzbuzz functions with javascript
var main = function(){
	"use strict" ;
	//declar var
	var array_1 = [101, 102, 103, 104, 105, 106, 107,108, 109, 110, 111, 112, 113, 114, 115];
	var object_1 = { divisibleByThree:"foo", divisibleByFive: "bar"};
	//jquery declare
	var $newline= $("<br>");
	
	var print = function(value){
		//using span so it lay out nicely
		var $printing = $("<span>").text(value + " | ");
		$("body").append($printing);
	};
	
	var makeheader= function(value){
		var $h1= $("<h1>").text(value);
		$("body").append($h1);
	};
	
	var check_fizzbuzz = function(value1,value2){
		var i;
		for(i=value1;i<=value2;i=i+1){
			if(i%5 ===0 &&i % 3 ===0){
				print("FizzBuzz");
			}else if(i%5 ===0) {
				print("Buzz");
			}else if(i % 3 ===0){
				print("Fizz");
			}else{
				print(i);
			}
		}
        $("body").append($newline);
	};
	
	var check_fizzbuzz_arr = function(value1){
		var i;
		for(i=0;i<value1.length;i=i+1){
			if(value1[i]%5 ===0 && value1[i] % 3 ===0){
				print("FizzBuzz");
			}else if(value1[i]%5 ===0) {
				print("Buzz");
			}else if(value1[i] % 3 ===0){
				print("Fizz");
			}else{
				print(value1[i]);
			}
		}
        $("body").append($newline);
	};
	
	var check_fizzbuzz_obj = function (value1){
		var i;
		for(i=0;i<=100;i=i+1){
			if(i%5 ===0 &&i % 3 ===0){
				print(value1.divisibleByFive+value1.divisibleByThree);
			}else if(i%5 ===0) {
				print(value1.divisibleByFive);
			}else if(i % 3 ===0){
				print(value1.divisibleByThree);
			}else{
				print(i);
			}
			}
			$("body").append($newline);
	};
	var check_fizzbuzz_both = function (value1,value2){
		var i;
		for(i=0;i<value1.length;i=i+1){
			if(value1[i]%5 ===0 && value1[i] % 3 ===0){
				print(value2.divisibleByFive +value2.divisibleByThree);
			}else if(value1[i]%5 ===0) {
				print(value2.divisibleByFive);
			}else if(value1[i] % 3 ===0){
				print( value2.divisibleByThree);
			}else{
				print(value1[i]);
			}
			}
        $("body").append($newline);
	};
    
	//defining function
	var fizzbuzz_1 = function(){
		makeheader("FizzBuzz_1 Output");
		//have to call manually
		check_fizzbuzz(0,100);
	};
	//function fizzbuzz2
	var fizzbuzz_2 = function(value1,value2){
		makeheader("FizzBuzz_2 Output");
		check_fizzbuzz(value1,value2);
	};
		//function fizzbuzz3
	var fizzbuzz_3 = function(value1){
		makeheader("FizzBuzz_3 Output");
		check_fizzbuzz_arr(value1);
	};
		//function fizzbuzz4
	var fizzbuzz_4 = function(value1){
		makeheader("FizzBuzz_4 Output");
		check_fizzbuzz_obj(value1);
	};
		//function fizzbuzz5
	var fizzbuzz_5 = function(value1,value2){
		makeheader("FizzBuzz_5 Output");
		check_fizzbuzz_both(value1,value2);
	};

	
	//function call
	fizzbuzz_1();
	fizzbuzz_2(200,300);
	fizzbuzz_3(array_1);
	fizzbuzz_4(object_1);
	fizzbuzz_5(array_1,object_1);
	
};


//run main on start
$(document).ready(main);
