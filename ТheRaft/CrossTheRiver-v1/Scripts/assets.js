var assets = (function(){
	var assets= {};
	
	//List of game images
	assets.images = [{
	    name: 'background',
	    id: 1,
	    src: 'img/background.png',
	    data: null
	},
	{
	    name: 'raft',
	    id: 2,
	    src: 'img/raft2.png',
	    data: null
	},
	{
	    name: 'policeman',
	    id: 3,
	    src: 'img/policeman.png',
	    data: null
	},
	{
	    name: 'criminal',
	    id: 4,
	    src: 'img/criminal.png',
	    data: null
	},
	{
	    name: 'mother',
	    id: 5,
	    src: 'img/mother.png',
	    data: null
	},
	{
	    name: 'father',
	    id: 6,
	    src: 'img/father.png',
	    data: null
	},
	{
	    name: 'boy1',
	    id: 7,
	    src: 'img/boy1.png',
	    data: null
	},
	{
	    name: 'boy2',
	    id: 8,
	    src: 'img/boy2.png',
	    data: null
	},
	{
	    name: 'girl1',
	    id: 9,
	    src: 'img/girl1.png',
	    data: null
	},
	{
	    name: 'girl2',
	    id: 10,
	    src: 'img/girl2.png',
	    data: null
	},
	{
	    name: 'arrow',
	    id: 11,
	    src: 'img/arrow.png',
	    data: null
	},
	{
	    name: 'wrong',
	    id: 12,
	    src: 'img/wrong.png',
	    data: null
	}];
	
	//The raft
	assets.raft = {
		position: {
			left: {
				x: 280,
				y: 240, 
			},
			right: {
				x: 386,
				y: 240
			}
		},
		seats : {
			seat1 : {
				position: {
					left: {
						x: 280,
						y: 220, 
					},
					right: {
						x: 390,
						y: 220
					}
				}
			},
			seat2 : {
				position: {
					left: {
						x: 310,
						y: 270 
					},
					right: {
						x: 420,
						y: 270
					}
				}
			}
		}
	};
	
	//The arrow
	assets.arrow = {
		position: {
			left: {
				x: 310,
				y: 340,
			},
			right: {
				x: 340,
				y: 340
			}
		}
	};
	
	//List of game characters
	assets.characters = [
		{
			name: 'policeman',
			role: 'policeman',
			position : {
				left: {
					x: 100,
					y: 100,
				},
				right: {
					x: 600,
					y: 100
				}
			}
		},
		{
			name: 'criminal',
			role: 'criminal',
			position : {
				left: {
					x: 170,
					y: 100,
				},
				right: {
					x: 670,
					y: 100
				}
			}
		},
		{
			name: 'mother',
			role: 'mother',
			position : {
				left: {
					x: 40,
					y: 180,
				},
				right: {
					x: 540,
					y: 180
				}
			}
		},
		{
			name: 'father',
			role: 'father',
			position : {
				left: {
					x: 40,
					y: 260,
				},
				right: {
					x: 540,
					y: 260
				}
			}
		},
		{
			name: 'boy1',
			role: 'boy',
			position : {
				left: {
					x: 100,
					y: 260,
				},
				right: {
					x: 600,
					y: 260
				}
			}
		},
		{
			name: 'boy2',
			role: 'boy',
			position : {
				left: {
					x: 160,
					y: 260,
				},
				right: {
					x: 660,
					y: 260
				}
			}
		},
		{
			name: 'girl1',
			role: 'girl',
			position : {
				left: {
					x: 100,
					y: 180,
				},
				right: {
					x: 600,
					y: 180
				}
			}
		},
		{
			name: 'girl2',
			role: 'girl',
			position : {
				left: {
					x: 160,
					y: 180,
				},
				right: {
					x: 660,
					y: 180
				}
			}
		}
	];
	return assets;
})();