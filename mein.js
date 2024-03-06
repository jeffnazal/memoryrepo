var columns;

		if(typeof subject == "object"){
			
			if(subject instanceof Column){
				//subject is column element
				return subject;
			}else if(subject instanceof ColumnComponent){
				//subject is public column component
				return subject._getSelf() || false;
			}else if(typeof HTMLElement !== "undefined" && subject instanceof HTMLElement){

      var matches = [];
		
		Object.keys(this.columnsByField).forEach((field) => {
			var fieldRoot = this.table.options.nestedFieldSeparator ? field.split(this.table.options.nestedFieldSeparator)[0] : field;
			if(fieldRoot === root){
				matches.push(this.columnsByField[field]);
			}
		});
		var index = this.columnsByIndex.findIndex((col) => {
			return col.visible;
		});
		
		return index > -1 ? this.columnsByIndex[index] : false;//hello
	}
//good
