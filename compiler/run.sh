SERVO_FOLDER=/home/chenyang/src/servo/src/components/main/layout/
GRAMMAR_FILE=${1:-css-grammar}
./runFtlRustBackend $GRAMMAR_FILE.ftl output && \
    cp output/$GRAMMAR_FILE.rs $SERVO_FOLDER/ftl_layout.rs && \
    cp output/libftl.rs $SERVO_FOLDER/ftl_lib.rs
