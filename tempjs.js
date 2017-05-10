
  function test1(){
     var summa=0;
     if(document.test.teglink[0].checked){summa=summa+20;}
     if(document.test.teglists[2].checked) {summa=summa+20;}
     if (document.test.tegmeta[3].checked){summa=summa+20;}

     if (document.test.tegtable[0].checked && document.test.tegtable[1].checked && document.test.tegtable[2].checked && document.test.tegtable[3].checked)
     {
          alert("МОЖНО ВВЕСТИ ТОЛЬКО 2 ОТВЕТА!!!!")}
     else if(document.test.tegtable[1].checked  && document.test.tegtable[2].checked)
         summa=summa+20;
     else if (document.test.tegtable[1].checked || document.test.tegtable[2].checked)
        summa=summa + 10;


      if (document.test.tegform[0].checked && document.test.tegform[1].checked && document.test.tegform[2].checked && document.test.tegform[3].checked)
        {
          alert("МОЖНО ВВЕСТИ ТОЛЬКО 2 ОТВЕТА!!!!")}
      else if(document.test.tegform[0].checked  && document.test.tegform[1].checked)
          summa=summa+20;
      else if (document.test.tegform[0].checked || document.test.tegform[1].checked)
          summa=summa + 10;



      alert("Ваш результат " +summa+ "% из 100% ");

  }