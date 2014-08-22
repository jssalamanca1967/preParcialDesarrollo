/* ========================================================================
 * Copyright 2014 preParcial
 *
 * Licensed under the MIT, The MIT License (MIT)
 * Copyright (c) 2014 preParcial

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 * ========================================================================


Source generated by CrudMaker version 1.0.0.201408112050

*/
define([], function() {
    App.Model._SeccionModel = Backbone.Model.extend({
        defaults: {
 
		 'name' : '' ,  
		 'cupoMaximo' : '' ,  
		 'salon' : '' ,  
		 'inscritos' : '' ,  
		 'profesor_seccionId' : ''        },
        initialize: function() {
          var self = this;
          this.on('invalid',function(error){
                 Backbone.trigger(self.get('componentId') + '-' + 'error',{event:"validation", message: error.validationError});
          });
        },
        getDisplay: function(name) {
			 if(name=='profesor_seccionId'){  
                 var value = App.Utils.getModelFromCache('profesorComponent',this.get('profesor_seccionId'));
                 if(value) 
                 return value.get('name');
             }
         return this.get(name);
        }
    });

    App.Model._SeccionList = Backbone.Collection.extend({
        model: App.Model._SeccionModel,
        initialize: function() {
        }

    });
    return App.Model._SeccionModel;
});