// inject summernote css into the admin interface
$('head').append('<link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote-lite.css" rel="stylesheet">')

// * ———————————————————————————————————————————————————————— * //
// *	summernote directive
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.compileProvider
	.directive('summernote', function () {
		return {
			link: function (scope, element, attr) {
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote-lite.js', function () {

          $(element[0]).summernote(brick_admin_settings.enduro_summernote);
          
          $(element[0]).on('summernote.change', function(_, contents) {
            scope.context[scope.terminatedkey] = contents;
          });
          

					scope.$watch('current_culture', function () {
            $(element[0]).summernote('code', scope.context[scope.terminatedkey] || '');
					})

          $(element[0]).summernote('code', scope.context[scope.terminatedkey]);
				})
			}
		}
	})
