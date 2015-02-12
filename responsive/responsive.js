/* Responsive class */
var ResponsiveController = function(page_container, iframe, breakpoints) {
    
    /* Default variables */
    var DEFAULT_PAGE_CONTAINER = "#base",
        DEFAULT_IFRAME = "#responsive_container",
        DEFAULT_BREAKPOINTS = {
            'xs' : 0,
            'sm' : 768,
            'md' : 992,
            'lg' : 1200
        }
    
    /* Assign default options */
    var _page_container = (page_container) ? $(page_container) : $(DEFAULT_PAGE_CONTAINER);
    var _iframe = (iframe) ? $(iframe) : $(DEFAULT_IFRAME);
    var _breakpoints = (breakpoints) ? breakpoints : DEFAULT_BREAKPOINTS;
    
    this.testFunction = function() {
        console.log(_page_container);
        console.log(_iframe);
        console.log(_breakpoints);
    }
    
    return this;
}