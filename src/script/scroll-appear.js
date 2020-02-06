(function() {
                
    var aboutEl = $('section.section--icon'),
        aboutElOffset = aboutEl.offset().top/2,
        documentEl = $(document);
    
    documentEl.on('scroll', function() {
        if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
    });
  })();

  (function() {
                
    var aboutEl = $('div.sectionperso'),
        aboutElOffset = aboutEl.offset().top/2,
        documentEl = $(document);
    
    documentEl.on('scroll', function() {
        if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
    });
  })();

  (function() {
                
    var aboutEl = $('img.img-ecology'),
        aboutElOffset = aboutEl.offset().top/2,
        documentEl = $(document);
    
    documentEl.on('scroll', function() {
        if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
    });
  })();

  (function() {
                
    var aboutEl = $('p.mannequin--text'),
        aboutElOffset = aboutEl.offset().top/2,
        documentEl = $(document);
    
    documentEl.on('scroll', function() {
        if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
    });
  })();