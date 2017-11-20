(function(){
      var words = [
          '[Клевер]',
          'Clover',
          'Trèfle',
          'Clee',
          'Trébol'
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 2000);

  })();
