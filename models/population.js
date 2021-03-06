/*

Copyright 2010 Arran Schlosberg (http://arranschlosberg.com);

This file is part of javascript-genetic-algos (https://github.com/aschlosberg/javascript-genetic-algos).

    javascript-genetic-algos is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    javascript-genetic-algos is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with javascript-genetic-algos.  If not, see <http://www.gnu.org/licenses/>.
    
*/

require('../functions.js');

exports.model = {

    properties : ['id', 'algo_id', 'size', 'state'],

    cast : {
    	size : Number,
    	state : Number
    },

    indexes : ['id', 'algo_id', 'state'],

    setters : {
    	size : function(v){
    		return Math.atLeastInt(v, 2);
    	},
    	state : function(v){
    		/*
    		0 : Create
    		1 : Express
    		2 : Fitness
    		3 : Breed
    		*/
    		return Math.between(parseInt(v), 0, 3);
    	}
    },

    getters : {},

    methods : {},

    static : {}

}