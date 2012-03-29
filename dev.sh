coffee -wc -o javascripts src/coffee/*.coffee & \
./node_modules/stylus/bin/stylus -w src/stylus/*.styl -o stylesheets/ & \
./node_modules/livereload/bin/livereload & \
serve
