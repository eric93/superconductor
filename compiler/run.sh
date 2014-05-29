SERVO_FOLDER=/home/chenyang/src/servo/src/components/main/layout/
GRAMMAR_FILE=${1:-css-grammar}
RUN_COMMAND=${2:-Backend}
./runFtlRust$RUN_COMMAND $GRAMMAR_FILE.ftl output && \
    cp output/$GRAMMAR_FILE.rs $SERVO_FOLDER/ftl_layout.rs && \
    cp output/libftl.rs $SERVO_FOLDER/ftl_lib.rs
