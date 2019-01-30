// inject summernote css into the admin interface
$('head').append('<link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote.css" rel="stylesheet">')

// * ———————————————————————————————————————————————————————— * //
// *	summernote directive
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.compileProvider
	.directive('summernote', function () {
		return {
			link: function (scope, element, attr) {
				$.getScript('http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote.js', function () {

					var editor = new Quill(element[0], brick_admin_settings.enduro_quill)

					editor.on('text-change', function(delta, oldDelta, source) {

						// scope.context[scope.terminatedkey] = editor.root.innerHTML
					})

					scope.$watch('current_culture', function () {
						// editor.root.innerHTML = scope.context[scope.terminatedkey] || ''
					})

					// editor.root.innerHTML = scope.context[scope.terminatedkey]
				})
			}
		}
	})
