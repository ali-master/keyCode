require 'compass/import-once/activate'

http_path = "/"
images_dir = "images/"
css_dir = "styles/"
fonts_dir = "styles/fonts/"
javascripts_dir = "scripts/"
relative_assets = true
sass_dir = "sass"
output_style = :compressed
line_comments = false
sass_options = {
	:cache => false
}
on_sprite_saved do |filename|
	if File.exists?(filename)
    	FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
    	FileUtils.rm_rf(filename)
  	end
end
on_stylesheet_saved do |filename|
	if File.exists?(filename)
    	css = File.read filename
    	File.open(filename, 'w+') do |f|
      		f << css.gsub(%r{(?<start>-s)(?<hash>[a-z0-9]{10})(?<file>\.png)}, '.png')
    	end
  	end
end