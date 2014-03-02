SERVO_FOLDER=/Users/chenyang/Desktop/servo/src/components/main/layout/
./runFtlRustBackend servo-grammar.ftl output && cp output/servo-grammar.rs $SERVO_FOLDER/ftl_layout.rs
cp output/libftl.rs $SERVO_FOLDER/ftl_lib.rs
