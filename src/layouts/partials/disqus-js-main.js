// Config
var disqus_config = function () {
    this.page.url = "{{ .Permalink }}";  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = "{{ .Permalink }}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable

};
// Build and append comments 
var d = document;
var s = d.createElement('script');
s.async = true;
s.src = '//' + "{{ . }}" + '.disqus.com/embed.js';
s.setAttribute('data-timestamp', + new Date());
(d.head || d.body).appendChild(s);