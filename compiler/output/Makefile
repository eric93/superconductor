RC = rustc

all: simple-test

simple-test: simple-test.rs liblibftl*.dylib
	$(RC) simple-test.rs -L .

liblibftl*.dylib: libftl.rs
	$(RC) libftl.rs --lib
