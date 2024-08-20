build-AddLayer:
	rm -rf $(ARTIFACTS_DIR)/nodejs
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"
	cd nodejs && npm ci
	cd nodejs && npm run build
	cp -r nodejs/dist/* "$(ARTIFACTS_DIR)/nodejs/"
