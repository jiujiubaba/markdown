t = document.getElementById('test');

function markdown(str){
  var element = document.getElementById(str);
  this.isElement = false;
  this.content = '';
  
  
  if (element === null) {
    this.content = str;
  } else {
    this.content = element.innerHTML;
    this.isElement = true;
  }
 
  this.render = function(){
    var content = this.content;
    
    content = this.toH6(content);
    content = this.toH5(content);
    content = this.toH4(content);
    content = this.toH3(content);
    content = this.toH2(content);
    content = this.toH1(content);
    content = this.toImg(content);
    content = this.toA(content);
    content = this.toCode(content);
    console.log(content);
  };
  
  this.toH1 = function (content) {
    return content.replace(/#(.+?)\n/g, "<h1>$1</h1>");
  };
  
  this.toH2 = function (content) {
    return content.replace(/##(.+?)\n/g, "<h2>$1</h2>");
  };
  this.toH3 = function (content) {
    return content.replace(/###(.+?)\n/g, "<h3>$1</h3>");
  };
  
  this.toH4 = function (content) {
    return content.replace(/####(.+?)\n/g, "<h4>$1</h4>");
  };
  this.toH5 = function (content) {
    return content.replace(/#####(.+?)\n/g, "<h5>$1</h5>");
  };
  this.toH6 = function (content) {
    return content.replace(/######(.+?)\n/g, "<h6>$1</h6>");
  };
  this.toA = function(content){
    return content.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  };
  this.toImg = function(content){
    return content.replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1">');
  };
  this.toCode = function(content){
     return content.replace(/```(.+?)```/g,'<code>$1</code>');
  };
}

var markdown = new markdown('test');

markdown.render();


