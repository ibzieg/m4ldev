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
		"rect" : [ 129.0, 79.0, 1078.0, 909.0 ],
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
					"format" : 6,
					"id" : "obj-24",
					"maxclass" : "flonum",
					"maximum" : 360.0,
					"minimum" : 0.0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 123.0, 200.0, 50.0, 22.0 ],
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
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 409.0, 578.0, 566.0, 164.0 ],
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
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 433.0, 356.0, 566.0, 164.0 ],
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
					"patching_rect" : [ 198.0, 498.0, 65.0, 22.0 ],
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
					"patching_rect" : [ 228.0, 673.0, 37.0, 22.0 ],
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
					"patching_rect" : [ 112.0, 310.0, 78.0, 22.0 ],
					"style" : "",
					"text" : "rate~ 0.0625"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.095481, 0.100396, 0.100293, 1.0 ],
					"fgcolor" : [ 0.439216, 0.74902, 0.254902, 1.0 ],
					"gridcolor" : [ 1.0, 1.0, 1.0, 0.11 ],
					"id" : "obj-16",
					"maxclass" : "scope~",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 75.0, 370.0, 201.0, 26.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "signal", "", "int" ],
					"patching_rect" : [ 123.0, 243.0, 42.0, 22.0 ],
					"style" : "",
					"text" : "sync~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 92.0, 515.0, 24.0, 24.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-28",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 90.0, 422.0, 45.0, 22.0 ],
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
					"patching_rect" : [ 90.0, 462.0, 44.0, 22.0 ],
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
					"patching_rect" : [ 111.0, 122.0, 37.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 113.864014, 186.0, 37.0, 22.0 ],
					"style" : "",
					"text" : "adc~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-35",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 288.0, 114.0, 24.0, 24.0 ],
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
					"id" : "obj-32",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "midi_time_clock.maxpat",
					"numinlets" : 0,
					"numoutlets" : 7,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "bang", "bang", "", "", "", "", "" ],
					"patching_rect" : [ 49.0, 48.0, 337.0, 25.0 ],
					"viewvisibility" : 1
				}

			}
 ],
		"lines" : [ 			{
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
					"order" : 0,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-16", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"order" : 1,
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"order" : 0,
					"source" : [ "obj-17", 0 ]
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
					"order" : 2,
					"source" : [ "obj-26", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"order" : 1,
					"source" : [ "obj-26", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"disabled" : 0,
					"hidden" : 0,
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
					"destination" : [ "obj-35", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-32", 6 ],
					"watchpoint_flags" : 1,
					"watchpoint_id" : 2
				}

			}
 ],
		"parameters" : 		{
			"obj-1::obj-6::obj-6::obj-16::obj-2" : [ "live.numbox[49]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-8::obj-15::obj-2" : [ "live.numbox[87]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-7::obj-12::obj-2" : [ "live.numbox[44]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-17::obj-16" : [ "live.toggle[11]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-3::obj-15::obj-2" : [ "live.numbox[159]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-7::obj-17::obj-2" : [ "live.numbox[39]", "live.numbox", 0 ],
			"obj-1::obj-4::obj-30" : [ "live.menu[32]", "live.menu[32]", 0 ],
			"obj-1::obj-6::obj-8::obj-12::obj-2" : [ "live.numbox[8]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-11::obj-13::obj-2" : [ "live.numbox[34]", "live.numbox", 0 ],
			"obj-2::obj-4::obj-38" : [ "live.text[1]", "live.text", 0 ],
			"obj-2::obj-6::obj-14::obj-16" : [ "live.toggle[14]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-8::obj-17::obj-2" : [ "live.numbox[3]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-11::obj-18::obj-2" : [ "live.numbox[29]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-10::obj-19::obj-2" : [ "live.numbox[100]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-13::obj-16" : [ "live.toggle[7]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-10::obj-15::obj-2" : [ "live.numbox[24]", "live.numbox", 0 ],
			"obj-2::obj-4::obj-69" : [ "I[4]", "I", 0 ],
			"obj-2::obj-6::obj-16::obj-3" : [ "live.menu[63]", "live.menu", 0 ],
			"obj-2::obj-6::obj-4::obj-18::obj-2" : [ "live.numbox[146]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-4::obj-12::obj-2" : [ "live.numbox[152]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-13::obj-12" : [ "live.menu[37]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-10::obj-19::obj-2" : [ "live.numbox[19]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-3::obj-15::obj-2" : [ "live.numbox[78]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-13::obj-9" : [ "live.menu[73]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-8::obj-13::obj-2" : [ "live.numbox[88]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-10::obj-16::obj-2" : [ "live.numbox[103]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-15::obj-16" : [ "live.toggle[5]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-9::obj-14::obj-2" : [ "live.numbox[14]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-3::obj-19::obj-2" : [ "live.numbox[73]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-11::obj-13::obj-2" : [ "live.numbox[115]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-4::obj-14::obj-2" : [ "live.numbox[149]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-17::obj-8" : [ "live.menu[16]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-4::obj-14::obj-2" : [ "live.numbox[68]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-18::obj-9" : [ "live.menu[53]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-13::obj-8" : [ "live.menu[74]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-4::obj-15::obj-2" : [ "live.numbox[150]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-17::obj-9" : [ "live.menu[15]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-4::obj-20::obj-2" : [ "live.numbox[63]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-17::obj-9" : [ "live.menu[57]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-14::obj-12" : [ "live.menu[68]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-8::obj-20::obj-2" : [ "live.numbox[81]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-10::obj-12::obj-2" : [ "live.numbox[107]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-18::obj-12" : [ "live.menu[10]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-5::obj-16::obj-2" : [ "live.numbox[58]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-13::obj-12" : [ "live.menu[72]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-8::obj-18::obj-2" : [ "live.numbox[83]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-7::obj-13::obj-2" : [ "live.numbox[124]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-16::obj-2" : [ "live.numbox[130]", "live.numbox", 0 ],
			"obj-1::obj-4::obj-69" : [ "I[1]", "I", 0 ],
			"obj-1::obj-6::obj-19::obj-9" : [ "live.menu[7]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-6::obj-12::obj-2" : [ "live.numbox[53]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-20::obj-8" : [ "live.menu[46]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-8::obj-16::obj-2" : [ "live.numbox[85]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-10::obj-20::obj-2" : [ "live.numbox[99]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-7::obj-12::obj-2" : [ "live.numbox[125]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-3::obj-16::obj-2" : [ "live.numbox[157]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-6::obj-17::obj-2" : [ "live.numbox[48]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-5::obj-14::obj-2" : [ "live.numbox[140]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-3::obj-14::obj-2" : [ "live.numbox[158]", "live.numbox", 0 ],
			"obj-1::obj-4::obj-19" : [ "live.dial[1]", "Velocity", 0 ],
			"obj-1::obj-6::obj-7::obj-13::obj-2" : [ "live.numbox[43]", "live.numbox", 0 ],
			"obj-2::obj-4::obj-17" : [ "Length[1]", "Length", 0 ],
			"obj-2::obj-6::obj-6::obj-13::obj-2" : [ "live.numbox[133]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-5::obj-15::obj-2" : [ "live.numbox[141]", "live.numbox", 0 ],
			"obj-1::obj-4::obj-3" : [ "live.menu[2]", "live.menu", 0 ],
			"obj-1::obj-6::obj-7::obj-18::obj-2" : [ "live.numbox[38]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-15::obj-16" : [ "live.toggle[13]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-3::obj-13::obj-2" : [ "live.numbox[160]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-13::obj-2" : [ "live.numbox[7]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-11::obj-15::obj-2" : [ "live.numbox[33]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-4::obj-20::obj-2" : [ "live.numbox[144]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-18::obj-2" : [ "live.numbox[2]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-11::obj-19::obj-2" : [ "live.numbox[28]", "live.numbox", 0 ],
			"obj-2::obj-4::obj-68" : [ "I[5]", "I", 0 ],
			"obj-2::obj-6::obj-16::obj-8" : [ "live.menu[62]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-4::obj-19::obj-2" : [ "live.numbox[145]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-10::obj-14::obj-2" : [ "live.numbox[23]", "live.numbox", 0 ],
			"obj-2::obj-4::obj-3" : [ "live.menu[41]", "live.menu", 0 ],
			"obj-2::obj-6::obj-6::obj-19::obj-2" : [ "live.numbox[127]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-20::obj-12" : [ "live.menu[3]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-15::obj-3" : [ "live.menu[25]", "live.menu", 0 ],
			"obj-1::obj-6::obj-10::obj-20::obj-2" : [ "live.numbox[18]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-3::obj-14::obj-2" : [ "live.numbox[77]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-18::obj-3" : [ "live.menu[55]", "live.menu", 0 ],
			"obj-2::obj-6::obj-15::obj-8" : [ "live.menu[66]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-10::obj-17::obj-2" : [ "live.numbox[102]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-12::obj-2" : [ "live.numbox[134]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-4::obj-16::obj-2" : [ "live.numbox[148]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-15::obj-9" : [ "live.menu[23]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-9::obj-16::obj-2" : [ "live.numbox[13]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-3::obj-20::obj-2" : [ "live.numbox[72]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-15::obj-3" : [ "live.menu[67]", "live.menu", 0 ],
			"obj-2::obj-6::obj-14::obj-9" : [ "live.menu[69]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-11::obj-19::obj-2" : [ "live.numbox[109]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-16::obj-16" : [ "live.toggle[4]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-4::obj-16::obj-2" : [ "live.numbox[67]", "live.numbox", 0 ],
			"obj-2::obj-4::obj-7" : [ "live.menu[42]", "live.menu", 0 ],
			"obj-2::obj-6::obj-17::obj-12" : [ "live.menu[56]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-9::obj-17::obj-2" : [ "live.numbox[93]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-3::obj-19::obj-2" : [ "live.numbox[154]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-20::obj-3" : [ "live.menu", "live.menu", 0 ],
			"obj-1::obj-6::obj-18::obj-8" : [ "live.menu[12]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-5::obj-12::obj-2" : [ "live.numbox[62]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-20::obj-12" : [ "live.menu[44]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-14::obj-3" : [ "live.menu[71]", "live.menu", 0 ],
			"obj-2::obj-6::obj-9::obj-14::obj-2" : [ "live.numbox[95]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-5::obj-18::obj-2" : [ "live.numbox[137]", "live.numbox", 0 ],
			"obj-1::obj-4::obj-70" : [ "I[2]", "I", 0 ],
			"obj-1::obj-6::obj-18::obj-16" : [ "live.toggle[2]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-5::obj-17::obj-2" : [ "live.numbox[57]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-9::obj-13::obj-2" : [ "live.numbox[97]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-7::obj-20::obj-2" : [ "live.numbox[117]", "live.numbox", 0 ],
			"obj-1::obj-4::obj-38" : [ "live.text", "live.text", 0 ],
			"obj-1::obj-6::obj-20::obj-8" : [ "live.menu[5]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-6::obj-13::obj-2" : [ "live.numbox[52]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-14::obj-2" : [ "live.numbox[131]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-14::obj-9" : [ "live.menu[34]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-6::obj-18::obj-2" : [ "live.numbox[47]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-20::obj-2" : [ "live.numbox[126]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-15::obj-2" : [ "live.numbox[132]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-7::obj-15::obj-2" : [ "live.numbox[42]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-16::obj-12" : [ "live.menu[60]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-7::obj-17::obj-2" : [ "live.numbox[120]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-9::obj-18::obj-2" : [ "live.numbox[11]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-7::obj-19::obj-2" : [ "live.numbox[37]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-5::obj-12::obj-2" : [ "live.numbox[143]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-15::obj-2" : [ "live.numbox[6]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-11::obj-14::obj-2" : [ "live.numbox[32]", "live.numbox", 0 ],
			"obj-1::obj-4::obj-7" : [ "live.menu[1]", "live.menu", 0 ],
			"obj-1::obj-6::obj-8::obj-19::obj-2" : [ "live.numbox[1]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-11::obj-20::obj-2" : [ "live.numbox[27]", "live.numbox", 0 ],
			"obj-2::obj-4::obj-70" : [ "I[3]", "I", 0 ],
			"obj-1::obj-6::obj-13::obj-3" : [ "live.menu[40]", "live.menu", 0 ],
			"obj-1::obj-6::obj-10::obj-16::obj-2" : [ "live.numbox[22]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-11::obj-15::obj-2" : [ "live.numbox[114]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-15::obj-8" : [ "live.menu[24]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-9::obj-12::obj-2" : [ "live.numbox[17]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-3::obj-16::obj-2" : [ "live.numbox[76]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-19::obj-3" : [ "live.menu[51]", "live.menu", 0 ],
			"obj-2::obj-6::obj-15::obj-12" : [ "live.menu[64]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-8::obj-12::obj-2" : [ "live.numbox[89]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-7::obj-16::obj-2" : [ "live.numbox[121]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-16::obj-8" : [ "live.menu[20]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-9::obj-17::obj-2" : [ "live.numbox[12]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-4::obj-12::obj-2" : [ "live.numbox[71]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-18::obj-12" : [ "live.menu[52]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-9::obj-19::obj-2" : [ "live.numbox[91]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-10::obj-13::obj-2" : [ "live.numbox[106]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-5::obj-20::obj-2" : [ "live.numbox[135]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-16::obj-12" : [ "live.menu[18]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-4::obj-17::obj-2" : [ "live.numbox[66]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-17::obj-2" : [ "live.numbox[129]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-5::obj-19::obj-2" : [ "live.numbox[136]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-17::obj-12" : [ "live.menu[14]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-5::obj-13::obj-2" : [ "live.numbox[61]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-18::obj-8" : [ "live.menu[54]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-3::obj-18::obj-2" : [ "live.numbox[155]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-18::obj-9" : [ "live.menu[11]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-5::obj-18::obj-2" : [ "live.numbox[56]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-19::obj-8" : [ "live.menu[50]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-8::obj-17::obj-2" : [ "live.numbox[84]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-11::obj-17::obj-2" : [ "live.numbox[111]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-20::obj-9" : [ "live.menu[4]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-6::obj-15::obj-2" : [ "live.numbox[51]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-8::obj-14::obj-2" : [ "live.numbox[86]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-7::obj-19::obj-2" : [ "live.numbox[118]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-14::obj-12" : [ "live.menu[33]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-6::obj-19::obj-2" : [ "live.numbox[46]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-7::obj-18::obj-2" : [ "live.numbox[119]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-7::obj-14::obj-2" : [ "live.numbox[41]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-11::obj-14::obj-2" : [ "live.numbox[113]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-9::obj-19::obj-2" : [ "live.numbox[10]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-7::obj-20::obj-2" : [ "live.numbox[36]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-14::obj-2" : [ "live.numbox[5]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-11::obj-16::obj-2" : [ "live.numbox[31]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-16::obj-9" : [ "live.menu[61]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-13::obj-9" : [ "live.menu[38]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-10::obj-12::obj-2" : [ "live.numbox[26]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-3::obj-12::obj-2" : [ "live.numbox[80]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-10::obj-18::obj-2" : [ "live.numbox[101]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-14::obj-3" : [ "live.menu[36]", "live.menu", 0 ],
			"obj-1::obj-6::obj-10::obj-17::obj-2" : [ "live.numbox[21]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-11::obj-20::obj-2" : [ "live.numbox[108]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-4::obj-17::obj-2" : [ "live.numbox[147]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-15::obj-12" : [ "live.menu[22]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-9::obj-13::obj-2" : [ "live.numbox[16]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-3::obj-17::obj-2" : [ "live.numbox[75]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-19::obj-9" : [ "live.menu[49]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-3::obj-20::obj-2" : [ "live.numbox[153]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-16::obj-9" : [ "live.menu[19]", "live.menu[2]", 0 ],
			"obj-1::obj-6::obj-4::obj-13::obj-2" : [ "live.numbox[70]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-18::obj-16" : [ "live.toggle[10]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-10::obj-14::obj-2" : [ "live.numbox[104]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-7::obj-14::obj-2" : [ "live.numbox[122]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-18::obj-3" : [ "live.menu[13]", "live.menu", 0 ],
			"obj-1::obj-6::obj-4::obj-18::obj-2" : [ "live.numbox[65]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-11::obj-12::obj-2" : [ "live.numbox[116]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-7::obj-15::obj-2" : [ "live.numbox[123]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-19::obj-8" : [ "live.menu[8]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-8::obj-20::obj-2" : [ "live.numbox", "live.numbox", 0 ],
			"obj-1::obj-6::obj-5::obj-15::obj-2" : [ "live.numbox[60]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-20::obj-9" : [ "live.menu[45]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-8::obj-19::obj-2" : [ "live.numbox[82]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-9::obj-15::obj-2" : [ "live.numbox[96]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-19::obj-16" : [ "live.toggle[1]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-5::obj-19::obj-2" : [ "live.numbox[55]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-19::obj-12" : [ "live.menu[48]", "live.menu[3]", 0 ],
			"obj-2::obj-6::obj-9::obj-12::obj-2" : [ "live.numbox[98]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-20::obj-16" : [ "live.toggle", "live.toggle", 0 ],
			"obj-1::obj-6::obj-6::obj-14::obj-2" : [ "live.numbox[50]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-20::obj-16" : [ "live.toggle[8]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-17::obj-3" : [ "live.menu[59]", "live.menu", 0 ],
			"obj-2::obj-6::obj-11::obj-16::obj-2" : [ "live.numbox[112]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-14::obj-8" : [ "live.menu[35]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-6::obj-20::obj-2" : [ "live.numbox[45]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-13::obj-16" : [ "live.toggle[15]", "live.toggle", 0 ],
			"obj-1::obj-4::obj-68" : [ "I", "I", 0 ],
			"obj-1::obj-6::obj-7::obj-16::obj-2" : [ "live.numbox[40]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-15::obj-9" : [ "live.menu[65]", "live.menu[2]", 0 ],
			"obj-2::obj-6::obj-5::obj-13::obj-2" : [ "live.numbox[142]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-9::obj-20::obj-2" : [ "live.numbox[9]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-11::obj-12::obj-2" : [ "live.numbox[35]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-8::obj-16::obj-2" : [ "live.numbox[4]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-11::obj-17::obj-2" : [ "live.numbox[30]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-13::obj-8" : [ "live.menu[39]", "live.menu[1]", 0 ],
			"obj-1::obj-6::obj-10::obj-13::obj-2" : [ "live.numbox[25]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-19::obj-16" : [ "live.toggle[9]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-14::obj-16" : [ "live.toggle[6]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-10::obj-18::obj-2" : [ "live.numbox[20]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-3::obj-13::obj-2" : [ "live.numbox[79]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-10::obj-15::obj-2" : [ "live.numbox[105]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-16::obj-3" : [ "live.menu[21]", "live.menu", 0 ],
			"obj-1::obj-6::obj-9::obj-15::obj-2" : [ "live.numbox[15]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-3::obj-18::obj-2" : [ "live.numbox[74]", "live.numbox", 0 ],
			"obj-2::obj-4::obj-19" : [ "live.dial[2]", "Velocity", 0 ],
			"obj-2::obj-6::obj-9::obj-20::obj-2" : [ "live.numbox[90]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-6::obj-18::obj-2" : [ "live.numbox[128]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-3::obj-12::obj-2" : [ "live.numbox[161]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-17::obj-3" : [ "live.menu[17]", "live.menu", 0 ],
			"obj-1::obj-6::obj-4::obj-15::obj-2" : [ "live.numbox[69]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-16::obj-16" : [ "live.toggle[12]", "live.toggle", 0 ],
			"obj-2::obj-6::obj-14::obj-8" : [ "live.menu[70]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-9::obj-18::obj-2" : [ "live.numbox[92]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-17::obj-16" : [ "live.toggle[3]", "live.toggle", 0 ],
			"obj-1::obj-6::obj-4::obj-19::obj-2" : [ "live.numbox[64]", "live.numbox", 0 ],
			"obj-2::obj-4::obj-30" : [ "live.menu[43]", "live.menu[32]", 0 ],
			"obj-2::obj-6::obj-13::obj-3" : [ "live.menu[75]", "live.menu", 0 ],
			"obj-2::obj-6::obj-9::obj-16::obj-2" : [ "live.numbox[94]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-11::obj-18::obj-2" : [ "live.numbox[110]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-4::obj-13::obj-2" : [ "live.numbox[151]", "live.numbox", 0 ],
			"obj-1::obj-4::obj-17" : [ "Length", "Length", 0 ],
			"obj-1::obj-6::obj-19::obj-3" : [ "live.menu[9]", "live.menu", 0 ],
			"obj-1::obj-6::obj-5::obj-14::obj-2" : [ "live.numbox[59]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-5::obj-17::obj-2" : [ "live.numbox[138]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-3::obj-17::obj-2" : [ "live.numbox[156]", "live.numbox", 0 ],
			"obj-1::obj-6::obj-19::obj-12" : [ "live.menu[6]", "live.menu[3]", 0 ],
			"obj-1::obj-6::obj-5::obj-20::obj-2" : [ "live.numbox[54]", "live.numbox", 0 ],
			"obj-2::obj-6::obj-20::obj-3" : [ "live.menu[47]", "live.menu", 0 ],
			"obj-2::obj-6::obj-17::obj-8" : [ "live.menu[58]", "live.menu[1]", 0 ],
			"obj-2::obj-6::obj-5::obj-16::obj-2" : [ "live.numbox[139]", "live.numbox", 0 ]
		}
,
		"dependency_cache" : [ 			{
				"name" : "midi_time_clock.maxpat",
				"bootpath" : "~/code/m4ldev/max/markov-ryk",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
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
 ],
		"autosave" : 0
	}

}
