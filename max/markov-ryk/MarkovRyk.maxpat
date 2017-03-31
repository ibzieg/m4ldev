{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 7,
			"minor" : 3,
			"revision" : 3,
			"architecture" : "x86",
			"modernui" : 1
		}
,
		"rect" : [ 151.0, 295.0, 793.0, 605.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 301.0, 27.0, 60.0, 22.0 ],
					"style" : "",
					"text" : "loadbang"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-6",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "SequenceEditor.maxpat",
					"numinlets" : 1,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 301.0, 239.0, 408.0, 177.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 301.0, 67.0, 53.0, 22.0 ],
					"style" : "",
					"text" : "initialize"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 356.0, 67.0, 52.0, 22.0 ],
					"style" : "",
					"text" : "compile"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 301.0, 154.0, 61.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "main.js",
						"parameter_enable" : 0
					}
,
					"style" : "",
					"text" : "js main.js"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-5", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-6::obj-7::obj-15::obj-2" : [ "live.numbox[42]", "live.numbox", 0 ],
			"obj-6::obj-16::obj-9" : [ "live.menu[17]", "live.menu[2]", 0 ],
			"obj-6::obj-7::obj-19::obj-2" : [ "live.numbox[37]", "live.numbox", 0 ],
			"obj-6::obj-17::obj-8" : [ "live.menu[14]", "live.menu[1]", 0 ],
			"obj-6::obj-11::obj-14::obj-2" : [ "live.numbox[32]", "live.numbox", 0 ],
			"obj-6::obj-18::obj-8" : [ "live.menu[10]", "live.menu[1]", 0 ],
			"obj-6::obj-11::obj-20::obj-2" : [ "live.numbox[27]", "live.numbox", 0 ],
			"obj-6::obj-19::obj-8" : [ "live.menu[6]", "live.menu[1]", 0 ],
			"obj-6::obj-10::obj-16::obj-2" : [ "live.numbox[22]", "live.numbox", 0 ],
			"obj-6::obj-3::obj-16::obj-2" : [ "live.numbox[76]", "live.numbox", 0 ],
			"obj-6::obj-9::obj-12::obj-2" : [ "live.numbox[17]", "live.numbox", 0 ],
			"obj-6::obj-4::obj-12::obj-2" : [ "live.numbox[71]", "live.numbox", 0 ],
			"obj-6::obj-9::obj-17::obj-2" : [ "live.numbox[12]", "live.numbox", 0 ],
			"obj-6::obj-4::obj-17::obj-2" : [ "live.numbox[66]", "live.numbox", 0 ],
			"obj-6::obj-8::obj-13::obj-2" : [ "live.numbox[7]", "live.numbox", 0 ],
			"obj-6::obj-5::obj-13::obj-2" : [ "live.numbox[61]", "live.numbox", 0 ],
			"obj-6::obj-8::obj-18::obj-2" : [ "live.numbox[2]", "live.numbox", 0 ],
			"obj-6::obj-5::obj-18::obj-2" : [ "live.numbox[56]", "live.numbox", 0 ],
			"obj-6::obj-20::obj-9" : [ "live.menu[2]", "live.menu[2]", 0 ],
			"obj-6::obj-13::obj-12" : [ "live.menu[28]", "live.menu[3]", 0 ],
			"obj-6::obj-6::obj-15::obj-2" : [ "live.numbox[51]", "live.numbox", 0 ],
			"obj-6::obj-14::obj-9" : [ "live.menu[25]", "live.menu[2]", 0 ],
			"obj-6::obj-6::obj-19::obj-2" : [ "live.numbox[46]", "live.numbox", 0 ],
			"obj-6::obj-8::obj-20::obj-2" : [ "live.numbox", "live.numbox", 0 ],
			"obj-6::obj-15::obj-3" : [ "live.menu[23]", "live.menu", 0 ],
			"obj-6::obj-7::obj-14::obj-2" : [ "live.numbox[41]", "live.numbox", 0 ],
			"obj-6::obj-16::obj-16" : [ "live.toggle[4]", "live.toggle", 0 ],
			"obj-6::obj-7::obj-20::obj-2" : [ "live.numbox[36]", "live.numbox", 0 ],
			"obj-6::obj-20::obj-16" : [ "live.toggle", "live.toggle", 0 ],
			"obj-6::obj-17::obj-12" : [ "live.menu[12]", "live.menu[3]", 0 ],
			"obj-6::obj-11::obj-16::obj-2" : [ "live.numbox[31]", "live.numbox", 0 ],
			"obj-6::obj-18::obj-9" : [ "live.menu[9]", "live.menu[2]", 0 ],
			"obj-6::obj-3::obj-12::obj-2" : [ "live.numbox[80]", "live.numbox", 0 ],
			"obj-6::obj-10::obj-12::obj-2" : [ "live.numbox[26]", "live.numbox", 0 ],
			"obj-6::obj-19::obj-9" : [ "live.menu[5]", "live.menu[2]", 0 ],
			"obj-6::obj-10::obj-17::obj-2" : [ "live.numbox[21]", "live.numbox", 0 ],
			"obj-6::obj-3::obj-17::obj-2" : [ "live.numbox[75]", "live.numbox", 0 ],
			"obj-6::obj-9::obj-13::obj-2" : [ "live.numbox[16]", "live.numbox", 0 ],
			"obj-6::obj-4::obj-13::obj-2" : [ "live.numbox[70]", "live.numbox", 0 ],
			"obj-6::obj-9::obj-18::obj-2" : [ "live.numbox[11]", "live.numbox", 0 ],
			"obj-6::obj-4::obj-18::obj-2" : [ "live.numbox[65]", "live.numbox", 0 ],
			"obj-6::obj-8::obj-15::obj-2" : [ "live.numbox[6]", "live.numbox", 0 ],
			"obj-6::obj-5::obj-15::obj-2" : [ "live.numbox[60]", "live.numbox", 0 ],
			"obj-6::obj-8::obj-19::obj-2" : [ "live.numbox[1]", "live.numbox", 0 ],
			"obj-6::obj-5::obj-19::obj-2" : [ "live.numbox[55]", "live.numbox", 0 ],
			"obj-6::obj-13::obj-9" : [ "live.menu[29]", "live.menu[2]", 0 ],
			"obj-6::obj-6::obj-14::obj-2" : [ "live.numbox[50]", "live.numbox", 0 ],
			"obj-6::obj-14::obj-8" : [ "live.menu[26]", "live.menu[1]", 0 ],
			"obj-6::obj-6::obj-20::obj-2" : [ "live.numbox[45]", "live.numbox", 0 ],
			"obj-6::obj-15::obj-8" : [ "live.menu[22]", "live.menu[1]", 0 ],
			"obj-6::obj-7::obj-16::obj-2" : [ "live.numbox[40]", "live.numbox", 0 ],
			"obj-6::obj-16::obj-8" : [ "live.menu[18]", "live.menu[1]", 0 ],
			"obj-6::obj-11::obj-12::obj-2" : [ "live.numbox[35]", "live.numbox", 0 ],
			"obj-6::obj-17::obj-3" : [ "live.menu[15]", "live.menu", 0 ],
			"obj-6::obj-11::obj-17::obj-2" : [ "live.numbox[30]", "live.numbox", 0 ],
			"obj-6::obj-18::obj-3" : [ "live.menu[11]", "live.menu", 0 ],
			"obj-6::obj-10::obj-13::obj-2" : [ "live.numbox[25]", "live.numbox", 0 ],
			"obj-6::obj-19::obj-3" : [ "live.menu[7]", "live.menu", 0 ],
			"obj-6::obj-3::obj-13::obj-2" : [ "live.numbox[79]", "live.numbox", 0 ],
			"obj-6::obj-10::obj-18::obj-2" : [ "live.numbox[20]", "live.numbox", 0 ],
			"obj-6::obj-3::obj-18::obj-2" : [ "live.numbox[74]", "live.numbox", 0 ],
			"obj-6::obj-9::obj-15::obj-2" : [ "live.numbox[15]", "live.numbox", 0 ],
			"obj-6::obj-4::obj-15::obj-2" : [ "live.numbox[69]", "live.numbox", 0 ],
			"obj-6::obj-9::obj-19::obj-2" : [ "live.numbox[10]", "live.numbox", 0 ],
			"obj-6::obj-4::obj-19::obj-2" : [ "live.numbox[64]", "live.numbox", 0 ],
			"obj-6::obj-8::obj-14::obj-2" : [ "live.numbox[5]", "live.numbox", 0 ],
			"obj-6::obj-5::obj-14::obj-2" : [ "live.numbox[59]", "live.numbox", 0 ],
			"obj-6::obj-13::obj-8" : [ "live.menu[30]", "live.menu[1]", 0 ],
			"obj-6::obj-5::obj-20::obj-2" : [ "live.numbox[54]", "live.numbox", 0 ],
			"obj-6::obj-14::obj-3" : [ "live.menu[27]", "live.menu", 0 ],
			"obj-6::obj-6::obj-16::obj-2" : [ "live.numbox[49]", "live.numbox", 0 ],
			"obj-6::obj-20::obj-8" : [ "live.menu[1]", "live.menu[1]", 0 ],
			"obj-6::obj-15::obj-9" : [ "live.menu[21]", "live.menu[2]", 0 ],
			"obj-6::obj-7::obj-12::obj-2" : [ "live.numbox[44]", "live.numbox", 0 ],
			"obj-6::obj-16::obj-3" : [ "live.menu[19]", "live.menu", 0 ],
			"obj-6::obj-7::obj-17::obj-2" : [ "live.numbox[39]", "live.numbox", 0 ],
			"obj-6::obj-17::obj-16" : [ "live.toggle[3]", "live.toggle", 0 ],
			"obj-6::obj-11::obj-13::obj-2" : [ "live.numbox[34]", "live.numbox", 0 ],
			"obj-6::obj-18::obj-16" : [ "live.toggle[2]", "live.toggle", 0 ],
			"obj-6::obj-11::obj-18::obj-2" : [ "live.numbox[29]", "live.numbox", 0 ],
			"obj-6::obj-19::obj-16" : [ "live.toggle[1]", "live.toggle", 0 ],
			"obj-6::obj-10::obj-15::obj-2" : [ "live.numbox[24]", "live.numbox", 0 ],
			"obj-6::obj-3::obj-15::obj-2" : [ "live.numbox[78]", "live.numbox", 0 ],
			"obj-6::obj-10::obj-19::obj-2" : [ "live.numbox[19]", "live.numbox", 0 ],
			"obj-6::obj-3::obj-19::obj-2" : [ "live.numbox[73]", "live.numbox", 0 ],
			"obj-6::obj-9::obj-14::obj-2" : [ "live.numbox[14]", "live.numbox", 0 ],
			"obj-6::obj-4::obj-14::obj-2" : [ "live.numbox[68]", "live.numbox", 0 ],
			"obj-6::obj-9::obj-20::obj-2" : [ "live.numbox[9]", "live.numbox", 0 ],
			"obj-6::obj-4::obj-20::obj-2" : [ "live.numbox[63]", "live.numbox", 0 ],
			"obj-6::obj-8::obj-16::obj-2" : [ "live.numbox[4]", "live.numbox", 0 ],
			"obj-6::obj-20::obj-12" : [ "live.menu[3]", "live.menu[3]", 0 ],
			"obj-6::obj-5::obj-16::obj-2" : [ "live.numbox[58]", "live.numbox", 0 ],
			"obj-6::obj-13::obj-3" : [ "live.menu[31]", "live.menu", 0 ],
			"obj-6::obj-6::obj-12::obj-2" : [ "live.numbox[53]", "live.numbox", 0 ],
			"obj-6::obj-14::obj-16" : [ "live.toggle[6]", "live.toggle", 0 ],
			"obj-6::obj-6::obj-17::obj-2" : [ "live.numbox[48]", "live.numbox", 0 ],
			"obj-6::obj-20::obj-3" : [ "live.menu", "live.menu", 0 ],
			"obj-6::obj-15::obj-16" : [ "live.toggle[5]", "live.toggle", 0 ],
			"obj-6::obj-7::obj-13::obj-2" : [ "live.numbox[43]", "live.numbox", 0 ],
			"obj-6::obj-16::obj-12" : [ "live.menu[16]", "live.menu[3]", 0 ],
			"obj-6::obj-7::obj-18::obj-2" : [ "live.numbox[38]", "live.numbox", 0 ],
			"obj-6::obj-17::obj-9" : [ "live.menu[13]", "live.menu[2]", 0 ],
			"obj-6::obj-11::obj-15::obj-2" : [ "live.numbox[33]", "live.numbox", 0 ],
			"obj-6::obj-18::obj-12" : [ "live.menu[8]", "live.menu[3]", 0 ],
			"obj-6::obj-11::obj-19::obj-2" : [ "live.numbox[28]", "live.numbox", 0 ],
			"obj-6::obj-19::obj-12" : [ "live.menu[4]", "live.menu[3]", 0 ],
			"obj-6::obj-10::obj-14::obj-2" : [ "live.numbox[23]", "live.numbox", 0 ],
			"obj-6::obj-3::obj-14::obj-2" : [ "live.numbox[77]", "live.numbox", 0 ],
			"obj-6::obj-10::obj-20::obj-2" : [ "live.numbox[18]", "live.numbox", 0 ],
			"obj-6::obj-3::obj-20::obj-2" : [ "live.numbox[72]", "live.numbox", 0 ],
			"obj-6::obj-9::obj-16::obj-2" : [ "live.numbox[13]", "live.numbox", 0 ],
			"obj-6::obj-4::obj-16::obj-2" : [ "live.numbox[67]", "live.numbox", 0 ],
			"obj-6::obj-8::obj-12::obj-2" : [ "live.numbox[8]", "live.numbox", 0 ],
			"obj-6::obj-5::obj-12::obj-2" : [ "live.numbox[62]", "live.numbox", 0 ],
			"obj-6::obj-8::obj-17::obj-2" : [ "live.numbox[3]", "live.numbox", 0 ],
			"obj-6::obj-5::obj-17::obj-2" : [ "live.numbox[57]", "live.numbox", 0 ],
			"obj-6::obj-13::obj-16" : [ "live.toggle[7]", "live.toggle", 0 ],
			"obj-6::obj-6::obj-13::obj-2" : [ "live.numbox[52]", "live.numbox", 0 ],
			"obj-6::obj-14::obj-12" : [ "live.menu[24]", "live.menu[3]", 0 ],
			"obj-6::obj-6::obj-18::obj-2" : [ "live.numbox[47]", "live.numbox", 0 ],
			"obj-6::obj-15::obj-12" : [ "live.menu[20]", "live.menu[3]", 0 ]
		}
,
		"dependency_cache" : [ 			{
				"name" : "main.js",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "SequenceEditor.maxpat",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "ProbabilityRow.maxpat",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "ProbabilityCell.maxpat",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "probability-cell-controller.js",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "RykNode.maxpat",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "ryk-node-controller.js",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
