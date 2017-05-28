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
		"rect" : [ 217.0, 91.0, 1440.0, 810.0 ],
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
					"id" : "obj-9",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 60.0, -16.0, 50.0, 0.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"checkedcolor" : [ 0.317647, 0.654902, 0.976471, 1.0 ],
					"id" : "obj-8",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 86.0, 20.0, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 551.989014, 73.0, 24.0, 24.0 ],
					"style" : "",
					"uncheckedcolor" : [ 0.92549, 0.364706, 0.341176, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 825.0, 82.0, 100.0, 22.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 196.0, 116.0, 92.0, 22.0 ],
					"style" : "",
					"text" : "rate~ 0.003906"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 196.0, 153.0, 45.0, 22.0 ],
					"style" : "",
					"text" : ">~ 0.5"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "bang" ],
					"patching_rect" : [ 196.0, 193.0, 44.0, 22.0 ],
					"style" : "",
					"text" : "edge~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 388.0, 94.0, 37.0, 22.0 ],
					"style" : "",
					"text" : "reset"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-33",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 388.0, 132.0, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-27",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "midi_trigger_interface.maxpat",
					"numinlets" : 8,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 495.0, 623.0, 525.0, 103.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-25",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "poly_quantizer.maxpat",
					"numinlets" : 1,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 5.0, 623.0, 156.0, 96.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-24",
					"maxclass" : "flonum",
					"maximum" : 360.0,
					"minimum" : 0.0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 15.0, 20.0, 50.0, 22.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-2",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "MarkovRyk.maxpat",
					"numinlets" : 2,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 495.0, 278.0, 400.0, 287.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-1",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "MarkovRyk.maxpat",
					"numinlets" : 2,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 5.0, 278.0, 402.0, 284.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-20",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 15.0, 116.0, 65.0, 22.0 ],
					"style" : "",
					"text" : "rate~ 0.25"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-19",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 15.0, 153.0, 37.0, 22.0 ],
					"style" : "",
					"text" : "dac~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 100.0, 116.0, 78.0, 22.0 ],
					"style" : "",
					"text" : "rate~ 0.0625"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "signal", "", "int" ],
					"patching_rect" : [ 15.0, 59.0, 42.0, 22.0 ],
					"style" : "",
					"text" : "sync~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-28",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 100.0, 153.0, 45.0, 22.0 ],
					"style" : "",
					"text" : ">~ 0.5"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-26",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "bang" ],
					"patching_rect" : [ 100.0, 193.0, 44.0, 22.0 ],
					"style" : "",
					"text" : "edge~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "signal" ],
					"patching_rect" : [ 196.0, 16.0, 37.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 113.864014, 186.0, 37.0, 22.0 ],
					"style" : "",
					"text" : "adc~"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-25", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"order" : 1,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"order" : 2,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"order" : 0,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-24", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 109.5, 234.0, 14.5, 234.0 ],
					"order" : 1,
					"source" : [ "obj-26", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 109.5, 233.0, 504.5, 233.0 ],
					"order" : 0,
					"source" : [ "obj-26", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-26", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 397.5, 159.0, 397.5, 159.0 ],
					"order" : 0,
					"source" : [ "obj-33", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 397.5, 199.0, 885.5, 199.0 ],
					"order" : 1,
					"source" : [ "obj-33", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-33", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-6", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-1::obj-6::obj-5::obj-16::obj-2" : [ "live.numbox[220]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-13::obj-9" : [ "live.menu[139]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-5::obj-17::obj-2" : [ "live.numbox[138]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-13::obj-8" : [ "live.menu[101]", "live.menu[1]", 0 ],
			"obj-25::obj-7" : [ "live.menu[67]", "live.menu", 0 ],
			"obj-1::obj-6::obj-6::obj-12::obj-2" : [ "live.numbox[215]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-14::obj-9" : [ "live.menu[135]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-6::obj-13::obj-2" : [ "live.numbox[133]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-14::obj-8" : [ "live.menu[97]", "live.menu[1]", 0 ],
			"obj-25::obj-69" : [ "I[1]", "I", 0 ],
			"obj-1::obj-6::obj-6::obj-17::obj-2" : [ "live.numbox[210]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-15::obj-3" : [ "live.menu[133]", "live.menu", 0 ],
			"obj-2::obj-6::obj-3::obj-14::obj-2" : [ "live.numbox[158]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-18::obj-2" : [ "live.numbox[128]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-15::obj-3" : [ "live.menu[82]", "live.menu", 0 ],
			"obj-1::obj-6::obj-7::obj-13::obj-2" : [ "live.numbox[205]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-16::obj-3" : [ "live.menu[129]", "live.menu", 0 ],
			"obj-2::obj-6::obj-7::obj-15::obj-2" : [ "live.numbox[123]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-16::obj-3" : [ "live.menu[24]", "live.menu", 0 ],
			"obj-1::obj-6::obj-7::obj-18::obj-2" : [ "live.numbox[200]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-17::obj-8" : [ "live.menu[124]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-7::obj-19::obj-2" : [ "live.numbox[118]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-17::obj-16" : [ "live.toggle[11]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-11::obj-15::obj-2" : [ "live.numbox[195]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-18::obj-3" : [ "live.menu[121]", "live.menu", 0 ],
			"obj-2::obj-6::obj-11::obj-14::obj-2" : [ "live.numbox[113]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-18::obj-9" : [ "live.menu[71]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-11::obj-19::obj-2" : [ "live.numbox[190]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-19::obj-16" : [ "live.toggle[17]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-11::obj-20::obj-2" : [ "live.numbox[108]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-19::obj-8" : [ "live.menu[23]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-10::obj-14::obj-2" : [ "live.numbox[185]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-20::obj-8" : [ "live.menu[105]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-10::obj-16::obj-2" : [ "live.numbox[103]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-20::obj-12" : [ "live.menu[22]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-3::obj-14::obj-2" : [ "live.numbox[239]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-10::obj-20::obj-2" : [ "live.numbox[180]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-69" : [ "live.text[24]", "live.text", 0 ],
			"obj-2::obj-6::obj-9::obj-12::obj-2" : [ "live.numbox[98]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-69" : [ "live.text[13]", "live.text", 0 ],
			"obj-1::obj-6::obj-3::obj-20::obj-2" : [ "live.numbox[234]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-9::obj-16::obj-2" : [ "live.numbox[175]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-64" : [ "live.text[32]", "live.text", 0 ],
			"obj-2::obj-6::obj-4::obj-12::obj-2" : [ "live.numbox[152]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-9::obj-17::obj-2" : [ "live.numbox[93]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-66" : [ "live.text[19]", "live.text", 0 ],
			"obj-1::obj-6::obj-4::obj-16::obj-2" : [ "live.numbox[229]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-12::obj-2" : [ "live.numbox[170]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-67" : [ "live.text[29]", "live.text", 0 ],
			"obj-2::obj-6::obj-4::obj-17::obj-2" : [ "live.numbox[147]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-8::obj-13::obj-2" : [ "live.numbox[88]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-67" : [ "live.text[18]", "live.text", 0 ],
			"obj-1::obj-6::obj-5::obj-12::obj-2" : [ "live.numbox[224]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-17::obj-2" : [ "live.numbox[165]", "live.numbox", 0 ],
			"obj-1::obj-4::obj-30" : [ "live.menu[95]", "live.menu[32]", 0 ],
			"obj-2::obj-6::obj-5::obj-13::obj-2" : [ "live.numbox[142]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-8::obj-18::obj-2" : [ "live.numbox[83]", "live.numbox", 0 ],
			"obj-25::obj-3" : [ "live.menu[66]", "live.menu", 0 ],
			"obj-1::obj-6::obj-5::obj-17::obj-2" : [ "live.numbox[219]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-13::obj-8" : [ "live.menu[140]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-5::obj-18::obj-2" : [ "live.numbox[137]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-13::obj-9" : [ "live.menu[100]", "live.menu[2]", 0 ],
			"obj-25::obj-70" : [ "I[2]", "I", 0 ],
			"obj-1::obj-6::obj-6::obj-13::obj-2" : [ "live.numbox[214]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-14::obj-16" : [ "live.toggle[22]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-6::obj-15::obj-2" : [ "live.numbox[132]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-14::obj-9" : [ "live.menu[96]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-6::obj-18::obj-2" : [ "live.numbox[209]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-15::obj-16" : [ "live.toggle[21]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-3::obj-16::obj-2" : [ "live.numbox[157]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-19::obj-2" : [ "live.numbox[127]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-15::obj-16" : [ "live.toggle[13]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-7::obj-15::obj-2" : [ "live.numbox[204]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-16::obj-16" : [ "live.toggle[20]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-7::obj-14::obj-2" : [ "live.numbox[122]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-16::obj-8" : [ "live.menu[79]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-7::obj-19::obj-2" : [ "live.numbox[199]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-17::obj-16" : [ "live.toggle[19]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-7::obj-20::obj-2" : [ "live.numbox[117]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-17::obj-9" : [ "live.menu[74]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-11::obj-14::obj-2" : [ "live.numbox[194]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-18::obj-12" : [ "live.menu[118]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-11::obj-16::obj-2" : [ "live.numbox[112]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-18::obj-16" : [ "live.toggle[10]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-11::obj-20::obj-2" : [ "live.numbox[189]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-19::obj-12" : [ "live.menu[107]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-10::obj-12::obj-2" : [ "live.numbox[107]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-19::obj-3" : [ "live.menu[45]", "live.menu", 0 ],
			"obj-1::obj-6::obj-10::obj-16::obj-2" : [ "live.numbox[184]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-20::obj-3" : [ "live.menu[106]", "live.menu", 0 ],
			"obj-2::obj-6::obj-10::obj-17::obj-2" : [ "live.numbox[102]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-20::obj-3" : [ "live.menu[42]", "live.menu", 0 ],
			"obj-25::obj-17" : [ "Length", "Length", 0 ],
			"obj-1::obj-6::obj-3::obj-16::obj-2" : [ "live.numbox[238]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-9::obj-12::obj-2" : [ "live.numbox[179]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-71" : [ "live.text[26]", "live.text", 0 ],
			"obj-2::obj-6::obj-9::obj-13::obj-2" : [ "live.numbox[97]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-77" : [ "live.menu[48]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-4::obj-12::obj-2" : [ "live.numbox[233]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-9::obj-17::obj-2" : [ "live.numbox[174]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-58" : [ "live.text[34]", "live.text", 0 ],
			"obj-2::obj-6::obj-4::obj-13::obj-2" : [ "live.numbox[151]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-9::obj-18::obj-2" : [ "live.numbox[92]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-64" : [ "live.text[21]", "live.text", 0 ],
			"obj-1::obj-6::obj-4::obj-17::obj-2" : [ "live.numbox[228]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-13::obj-2" : [ "live.numbox[169]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-65" : [ "live.text[31]", "live.text", 0 ],
			"obj-2::obj-6::obj-4::obj-18::obj-2" : [ "live.numbox[146]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-8::obj-15::obj-2" : [ "live.numbox[87]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-75" : [ "live.menu[51]", "live.menu", 0 ],
			"obj-1::obj-6::obj-5::obj-13::obj-2" : [ "live.numbox[223]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-18::obj-2" : [ "live.numbox[164]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-5::obj-15::obj-2" : [ "live.numbox[141]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-8::obj-19::obj-2" : [ "live.numbox[82]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-5::obj-18::obj-2" : [ "live.numbox[218]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-13::obj-12" : [ "live.menu[138]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-5::obj-19::obj-2" : [ "live.numbox[136]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-13::obj-16" : [ "live.toggle[15]", "live.toggle", 0 ],
			"obj-25::obj-38" : [ "live.text", "live.text", 0 ],
			"obj-27::obj-17" : [ "Length[1]", "Length", 0 ],
			"obj-1::obj-6::obj-6::obj-15::obj-2" : [ "live.numbox[213]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-14::obj-3" : [ "live.menu[137]", "live.menu", 0 ],
			"obj-2::obj-6::obj-3::obj-12::obj-2" : [ "live.numbox[161]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-14::obj-2" : [ "live.numbox[131]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-14::obj-3" : [ "live.menu[98]", "live.menu", 0 ],
			"obj-1::obj-6::obj-6::obj-19::obj-2" : [ "live.numbox[208]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-15::obj-9" : [ "live.menu[131]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-3::obj-17::obj-2" : [ "live.numbox[156]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-20::obj-2" : [ "live.numbox[126]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-15::obj-9" : [ "live.menu[80]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-7::obj-14::obj-2" : [ "live.numbox[203]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-16::obj-8" : [ "live.menu[128]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-7::obj-16::obj-2" : [ "live.numbox[121]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-16::obj-9" : [ "live.menu[78]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-7::obj-20::obj-2" : [ "live.numbox[198]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-17::obj-3" : [ "live.menu[125]", "live.menu", 0 ],
			"obj-2::obj-6::obj-11::obj-12::obj-2" : [ "live.numbox[116]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-17::obj-8" : [ "live.menu[75]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-11::obj-16::obj-2" : [ "live.numbox[193]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-18::obj-8" : [ "live.menu[120]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-11::obj-17::obj-2" : [ "live.numbox[111]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-18::obj-3" : [ "live.menu[73]", "live.menu", 0 ],
			"obj-1::obj-6::obj-3::obj-12::obj-2" : [ "live.numbox[242]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-10::obj-12::obj-2" : [ "live.numbox[188]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-19::obj-3" : [ "live.menu[117]", "live.menu", 0 ],
			"obj-2::obj-6::obj-10::obj-13::obj-2" : [ "live.numbox[106]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-19::obj-12" : [ "live.menu[44]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-10::obj-17::obj-2" : [ "live.numbox[183]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-20::obj-16" : [ "live.toggle[16]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-10::obj-18::obj-2" : [ "live.numbox[101]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-20::obj-16" : [ "live.toggle[8]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-3::obj-17::obj-2" : [ "live.numbox[237]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-9::obj-13::obj-2" : [ "live.numbox[178]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-68" : [ "live.text[28]", "live.text", 0 ],
			"obj-2::obj-6::obj-3::obj-18::obj-2" : [ "live.numbox[155]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-9::obj-15::obj-2" : [ "live.numbox[96]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-71" : [ "live.text[15]", "live.text", 0 ],
			"obj-1::obj-6::obj-4::obj-13::obj-2" : [ "live.numbox[232]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-9::obj-18::obj-2" : [ "live.numbox[173]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-75" : [ "live.menu[115]", "live.menu", 0 ],
			"obj-2::obj-6::obj-4::obj-15::obj-2" : [ "live.numbox[150]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-9::obj-19::obj-2" : [ "live.numbox[91]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-58" : [ "live.text[23]", "live.text", 0 ],
			"obj-1::obj-6::obj-4::obj-18::obj-2" : [ "live.numbox[227]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-15::obj-2" : [ "live.numbox[168]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-77" : [ "live.menu[112]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-4::obj-19::obj-2" : [ "live.numbox[145]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-8::obj-14::obj-2" : [ "live.numbox[86]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-65" : [ "live.text[20]", "live.text", 0 ],
			"obj-1::obj-6::obj-5::obj-15::obj-2" : [ "live.numbox[222]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-19::obj-2" : [ "live.numbox[163]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-5::obj-14::obj-2" : [ "live.numbox[140]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-8::obj-20::obj-2" : [ "live.numbox[81]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-5::obj-19::obj-2" : [ "live.numbox[217]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-13::obj-16" : [ "live.toggle[23]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-5::obj-20::obj-2" : [ "live.numbox[135]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-13::obj-3" : [ "live.menu[102]", "live.menu", 0 ],
			"obj-27::obj-19" : [ "live.dial[2]", "Velocity", 0 ],
			"obj-1::obj-6::obj-6::obj-14::obj-2" : [ "live.numbox[212]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-14::obj-8" : [ "live.menu[136]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-3::obj-13::obj-2" : [ "live.numbox[160]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-16::obj-2" : [ "live.numbox[130]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-14::obj-12" : [ "live.menu[83]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-6::obj-20::obj-2" : [ "live.numbox[207]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-15::obj-8" : [ "live.menu[132]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-7::obj-12::obj-2" : [ "live.numbox[125]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-15::obj-12" : [ "live.menu[47]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-7::obj-16::obj-2" : [ "live.numbox[202]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-16::obj-9" : [ "live.menu[127]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-7::obj-17::obj-2" : [ "live.numbox[120]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-16::obj-12" : [ "live.menu[77]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-11::obj-12::obj-2" : [ "live.numbox[197]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-17::obj-12" : [ "live.menu[122]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-11::obj-13::obj-2" : [ "live.numbox[115]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-17::obj-12" : [ "live.menu[46]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-11::obj-17::obj-2" : [ "live.numbox[192]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-18::obj-16" : [ "live.toggle[18]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-11::obj-18::obj-2" : [ "live.numbox[110]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-18::obj-12" : [ "live.menu[70]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-10::obj-13::obj-2" : [ "live.numbox[187]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-19::obj-8" : [ "live.menu[116]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-10::obj-15::obj-2" : [ "live.numbox[105]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-19::obj-16" : [ "live.toggle[9]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-3::obj-13::obj-2" : [ "live.numbox[241]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-10::obj-18::obj-2" : [ "live.numbox[182]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-20::obj-12" : [ "live.menu[103]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-10::obj-19::obj-2" : [ "live.numbox[100]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-20::obj-9" : [ "live.menu[40]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-3::obj-18::obj-2" : [ "live.numbox[236]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-9::obj-15::obj-2" : [ "live.numbox[177]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-74" : [ "live.menu[114]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-3::obj-19::obj-2" : [ "live.numbox[154]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-9::obj-14::obj-2" : [ "live.numbox[95]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-68" : [ "live.text[17]", "live.text", 0 ],
			"obj-1::obj-6::obj-4::obj-15::obj-2" : [ "live.numbox[231]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-9::obj-19::obj-2" : [ "live.numbox[172]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-70" : [ "live.text[25]", "live.text", 0 ],
			"obj-2::obj-6::obj-4::obj-14::obj-2" : [ "live.numbox[149]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-9::obj-20::obj-2" : [ "live.numbox[90]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-70" : [ "live.text[14]", "live.text", 0 ],
			"obj-1::obj-6::obj-4::obj-19::obj-2" : [ "live.numbox[226]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-14::obj-2" : [ "live.numbox[167]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-63" : [ "live.text[33]", "live.text", 0 ],
			"obj-2::obj-6::obj-4::obj-20::obj-2" : [ "live.numbox[144]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-8::obj-16::obj-2" : [ "live.numbox[85]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-63" : [ "live.text[22]", "live.text", 0 ],
			"obj-1::obj-6::obj-5::obj-14::obj-2" : [ "live.numbox[221]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-20::obj-2" : [ "live.numbox[162]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-5::obj-16::obj-2" : [ "live.numbox[139]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-13::obj-12" : [ "live.menu[99]", "live.menu[3]", 0 ],
			"obj-27::obj-72" : [ "live.menu[142]", "live.menu", 0 ],
			"obj-1::obj-6::obj-5::obj-20::obj-2" : [ "live.numbox[216]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-13::obj-3" : [ "live.menu[141]", "live.menu", 0 ],
			"obj-2::obj-6::obj-6::obj-12::obj-2" : [ "live.numbox[134]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-14::obj-16" : [ "live.toggle[14]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-6::obj-16::obj-2" : [ "live.numbox[211]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-14::obj-12" : [ "live.menu[134]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-3::obj-15::obj-2" : [ "live.numbox[159]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-17::obj-2" : [ "live.numbox[129]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-15::obj-8" : [ "live.menu[81]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-7::obj-12::obj-2" : [ "live.numbox[206]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-15::obj-12" : [ "live.menu[130]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-7::obj-13::obj-2" : [ "live.numbox[124]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-16::obj-16" : [ "live.toggle[12]", "live.toggle", 0 ],
			"obj-27::obj-38" : [ "live.text[35]", "live.text", 0 ],
			"obj-1::obj-6::obj-7::obj-17::obj-2" : [ "live.numbox[201]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-16::obj-12" : [ "live.menu[126]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-7::obj-18::obj-2" : [ "live.numbox[119]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-17::obj-3" : [ "live.menu[76]", "live.menu", 0 ],
			"obj-1::obj-6::obj-11::obj-13::obj-2" : [ "live.numbox[196]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-17::obj-9" : [ "live.menu[123]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-11::obj-15::obj-2" : [ "live.numbox[114]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-18::obj-8" : [ "live.menu[72]", "live.menu[1]", 0 ],
			"obj-25::obj-68" : [ "I", "I", 0 ],
			"obj-1::obj-6::obj-11::obj-18::obj-2" : [ "live.numbox[191]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-18::obj-9" : [ "live.menu[119]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-11::obj-19::obj-2" : [ "live.numbox[109]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-19::obj-9" : [ "live.menu[69]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-10::obj-15::obj-2" : [ "live.numbox[186]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-19::obj-9" : [ "live.menu[108]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-10::obj-14::obj-2" : [ "live.numbox[104]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-20::obj-8" : [ "live.menu[41]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-3::obj-15::obj-2" : [ "live.numbox[240]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-10::obj-19::obj-2" : [ "live.numbox[181]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-20::obj-9" : [ "live.menu[104]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-10::obj-20::obj-2" : [ "live.numbox[99]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-74" : [ "live.menu[50]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-3::obj-19::obj-2" : [ "live.numbox[235]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-9::obj-14::obj-2" : [ "live.numbox[176]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-66" : [ "live.text[30]", "live.text", 0 ],
			"obj-2::obj-6::obj-3::obj-20::obj-2" : [ "live.numbox[153]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-9::obj-16::obj-2" : [ "live.numbox[94]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-76" : [ "live.menu[49]", "live.menu", 0 ],
			"obj-25::obj-19" : [ "live.dial[1]", "Velocity", 0 ],
			"obj-1::obj-6::obj-4::obj-14::obj-2" : [ "live.numbox[230]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-9::obj-20::obj-2" : [ "live.numbox[171]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-72" : [ "live.text[27]", "live.text", 0 ],
			"obj-2::obj-6::obj-4::obj-16::obj-2" : [ "live.numbox[148]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-8::obj-12::obj-2" : [ "live.numbox[89]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-72" : [ "live.text[16]", "live.text", 0 ],
			"obj-1::obj-6::obj-4::obj-20::obj-2" : [ "live.numbox[225]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-16::obj-2" : [ "live.numbox[166]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-76" : [ "live.menu[113]", "live.menu", 0 ],
			"obj-2::obj-6::obj-5::obj-12::obj-2" : [ "live.numbox[143]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-8::obj-17::obj-2" : [ "live.numbox[84]", "live.numbox", 0 ],
			"obj-2::obj-4::obj-30" : [ "live.menu[43]", "live.menu[32]", 0 ]
		}
,
		"dependency_cache" : [ 			{
				"name" : "MarkovRyk.maxpat",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
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
, 			{
				"name" : "ryk-parameter-mode.js",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "Sequencer.maxpat",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "sequencer.js",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "clock_divider.js",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "poly_quantizer.maxpat",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "chord_harmonizer.js",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "poly_makenote.maxpat",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "poly_pitch.js",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "midi_trigger_interface.maxpat",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
