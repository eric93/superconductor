SERVO_FOLDER=/Users/eatkinson/cy-servo/servo/src/components/main/layout/
./runFtlRustBackend servo-grammar.ftl output && cp output/servo-grammar.rs $SERVO_FOLDER/ftl_layout.rs
cp output/libftl.rs $SERVO_FOLDER/ftl_lib.rs
