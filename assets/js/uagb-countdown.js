UAGBCountdown = { // eslint-disable-line no-undef
	elements: {},
	countdownInterval: {},

	editorInit( mainSelector, data = {}, countdownRef ) {

        this.elements[mainSelector] = this.getDefaultElements( mainSelector );

		this.countdownInterval[ mainSelector ] = setInterval( () => {
			this.updateCountdown( mainSelector, data, true, countdownRef );
		}, 1000 );
		console.log( mainSelector )
		console.log( this.countdownInterval[ mainSelector ] )
	},

	init( mainSelector, data = {} ) {

        this.elements[mainSelector] = this.getDefaultElements( mainSelector );

        if( typeof this.elements[ mainSelector ] !== 'undefined' ){
            this.countdownInterval[ mainSelector ] = setInterval( () => {
                this.updateCountdown( mainSelector, data );
            }, 1000 );

		}

	},

	changeEndTime( mainSelector, data = {}, ref ) {

		clearInterval( this.countdownInterval[ mainSelector ] );

        if( typeof this.elements[ mainSelector ] !== 'undefined' ){
            this.countdownInterval[ mainSelector ] = setInterval( () => {
                this.updateCountdown( mainSelector, data, true, ref );
            }, 1000 );
		}
	},

	getDefaultElements( mainSelector ) {
		const countdownWrapper = this.getElement( mainSelector );
		return {
			countdownWrapper
		};
	},

	getElement( selector, childSelector = null ) {
		let domElement = document.querySelector( selector );
		if ( domElement ) {
			if ( childSelector ) {
				return domElement.querySelector( childSelector );
			}
		} else {
			const editorCanvas = document.querySelector(
				'iframe[name="editor-canvas"]'
			);
			if ( editorCanvas && editorCanvas.contentDocument ) {
				domElement = editorCanvas.contentDocument.querySelector(
					selector
				);
				if ( childSelector ) {
					return ( domElement = domElement.querySelector(
						childSelector
					) );
				}
			}
		}
		return domElement;
	},

    updateCountdown( mainSelector, data, isEditor = false, ref = null ) {

		// Wrappers.
		let daysWrap;
		let hoursWrap;
		let minutesWrap;
		let secondsWrap;

		if( isEditor ) {
			daysWrap = ref.querySelector( '.wp-block-uagb-countdown__time-days' );
			hoursWrap = ref.querySelector( '.wp-block-uagb-countdown__time-hours' );
			minutesWrap = ref.querySelector( '.wp-block-uagb-countdown__time-minutes' );
			secondsWrap = ref.querySelector( '.wp-block-uagb-countdown__time-seconds' );
		} else {
			daysWrap = this.elements[ mainSelector ].countdownWrapper?.querySelector( '.wp-block-uagb-countdown__time-days' );
			hoursWrap = this.elements[ mainSelector ].countdownWrapper?.querySelector( '.wp-block-uagb-countdown__time-hours' );
			minutesWrap = this.elements[ mainSelector ].countdownWrapper?.querySelector( '.wp-block-uagb-countdown__time-minutes' );
			secondsWrap = this.elements[ mainSelector ].countdownWrapper?.querySelector( '.wp-block-uagb-countdown__time-seconds' );
		}

        // Calculations.
        const currentTime = new Date();
        const endDateTime = new Date( data.endDateTime );
        const diff = endDateTime - currentTime;
        const isOvertime = diff < 0;

        // Calculations for each unit.
        const days = Math.floor( diff / 1000 / 60 / 60 / 24 );
        const hours = Math.floor( diff / 1000 / 60 / 60 ) % 24;
        const minutes = Math.floor( diff / 1000 / 60 ) % 60;
        const seconds = Math.floor( diff / 1000 ) % 60;

        // Update the markup.
        daysWrap.innerHTML = ( ! isOvertime ) ? days : 0;
        hoursWrap.innerHTML = ( ! isOvertime ) ? hours : 0;
        minutesWrap.innerHTML = ( ! isOvertime ) ? minutes : 0;
        secondsWrap.innerHTML = ( ! isOvertime ) ? seconds : 0;

    }

};
