/* Responsive class */
var ResponsiveController = function(page_container, iframe_element, breakpoints) {
    
    /* Default variables */
    var DEFAULT_PAGE_CONTAINER = "main",
        DEFAULT_IFRAME_ELEMENT = "responsive_container",
        DEFAULT_BREAKPOINTS = {
            'xs' : 0,
            'sm' : 768,
            'md' : 992,
            'lg' : 1200
        }
    
    /* Assign default options */
    var _options = {};
    _options.page_container = (page_container) ? page_container : DEFAULT_PAGE_CONTAINER;
    _options.page_container = (iframe_element) ? iframe_element : DEFAULT_IFRAME_ELEMENT;
    _options.page_container = (breakpoints) ? breakpoints : DEFAULT_BREAKPOINTS;
    
    this.testFunction = function() {
        console.log(_options);
    }
    
    return this;
}