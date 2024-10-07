console.log("loaded");


  const scriptFunc = document.createElement('script');
  scriptFunc.type="text/javascript";
  scriptFunc.innerHTML=`function googleTranslateElementInit(){
    let lang=document.documentElement.lang
    if(lang=="") lang=='en';
    new google.translate.TranslateElement({
      pageLanguage:lang,
    },
    "google_translate_element"
    )
  }`

  const div=document.createElement('div');
  const google_translate_element=document.createElement('div');
  google_translate_element.id='google_translate_element';
  div.style.background='#fff'
  div.style.zIndex='10000'
  div.style.position='fixed'
  div.style.right='0'
  div.style.padding="20px"
  div.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

  const divEle=document.createElement('div');
  divEle.style.position='relative'
  const spanEle=document.createElement('span');
  spanEle.innerHTML=">";
  spanEle.style.position="absolute";
  spanEle.style.right="-10px";
  spanEle.style.top="-15px";
  spanEle.style.fontWeight='bolder'

  spanEle.onclick=()=>{
    toggle(google_translate_element)
  };


  var show = function (elem) {
    elem.style.display = 'block';
  };
  
  // Hide an element
  var hide = function (elem) {
    elem.style.display = 'none';
  };

  var toggle = function (elem) {

    // If the element is visible, hide it
    if (window.getComputedStyle(elem).display === 'block') {
      hide(elem);
      return;
    }
  
    // Otherwise, show it
    show(elem);
  
  };




divEle.appendChild(spanEle)
  div.appendChild(divEle)
  div.appendChild(google_translate_element)





  document.body.insertBefore(div,document.body.children[0]);

   const script = document.createElement('script');
   script.type="text/javascript";
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(scriptFunc)
    document.body.appendChild(script)