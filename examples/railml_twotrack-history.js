var data = { "infrastructure": {
"nodes":{"b1": { "other_node": "n0b" }, "n0b": { "other_node": "b1" }, "n1a": { "other_node": "n1b" }, "n1b": { "other_node": "n1a" }, "n2a": { "other_node": "n2b" }, "n2b": { "other_node": "n2a" }, "n3a": { "other_node": "n3b" }, "n3b": { "other_node": "n3a" }, "n4a": { "other_node": "n4b" }, "n4b": { "other_node": "n4a" }, "n5a": { "other_node": "n5b" }, "n5b": { "other_node": "n5a" }, "n6a": { "other_node": "n6b" }, "n6b": { "other_node": "n6a" }, "n7a": { "other_node": "n7b" }, "n7b": { "other_node": "n7a" }, "n8a": { "other_node": "n8b" }, "n8b": { "other_node": "n8a" }, "n9a": { "other_node": "n9b" }, "n9b": { "other_node": "n9a" }, "n10a": { "other_node": "n10b" }, "n10b": { "other_node": "n10a" }, "n11a": { "other_node": "n11b" }, "n11b": { "other_node": "n11a" }, "n12a": { "other_node": "b2" }, "b2": { "other_node": "n12a" }},"objects":{ "sig1": { "type":"signal", "node": "n3b" } ,  "sig2": { "type":"signal", "node": "n7b" } ,  "sig3": { "type":"signal", "node": "n9b" } },"events":[{ "time": 0, "event": "route", "ref": "0", "value": "Pending" }, { "time": 0, "event": "reserved", "ref": "sec1", "value": "true" }, { "time": 0, "event": "signal", "ref": "sig1", "value": "green" }, { "time": 0, "event": "route", "ref": "0", "value": "Active" }, { "time": 0, "event": "route", "ref": "0", "value": "Pending" }, { "time": 0, "event": "reserved", "ref": "sec2", "value": "true" }, { "time": 0, "event": "signal", "ref": "sig2", "value": "green" }, { "time": 0, "event": "route", "ref": "0", "value": "Active" }, { "time": 0, "event": "route", "ref": "0", "value": "Pending" }, { "time": 0, "event": "reserved", "ref": "sec3", "value": "true" }, { "time": 0, "event": "signal", "ref": "sig3", "value": "green" }, { "time": 0, "event": "route", "ref": "0", "value": "Active" }, { "time": 0, "event": "route", "ref": "0", "value": "Pending" }, { "time": 0, "event": "reserved", "ref": "sec0", "value": "true" }, { "time": 0, "event": "route", "ref": "0", "value": "Active" }, { "time": 4.47213595499958, "event": "occupied", "ref": "sec0", "value": "true" }, { "time": 10, "event": "occupied", "ref": "sec1", "value": "true" }, { "time": 10, "event": "signal", "ref": "sig1", "value": "red" }, { "time": 20, "event": "occupied", "ref": "sec0", "value": "false" }, { "time": 20, "event": "reserved", "ref": "sec0", "value": "false" }, { "time": 20, "event": "route", "ref": "0", "value": "Released" }, { "time": 22.5, "event": "occupied", "ref": "sec2", "value": "true" }, { "time": 22.5, "event": "signal", "ref": "sig2", "value": "red" }, { "time": 27.5, "event": "occupied", "ref": "sec3", "value": "true" }, { "time": 27.5, "event": "signal", "ref": "sig3", "value": "red" }, { "time": 30, "event": "occupied", "ref": "sec1", "value": "false" }, { "time": 30, "event": "reserved", "ref": "sec1", "value": "false" }, { "time": 30, "event": "route", "ref": "0", "value": "Released" }, { "time": 35, "event": "occupied", "ref": "sec2", "value": "false" }, { "time": 35, "event": "reserved", "ref": "sec2", "value": "false" }, { "time": 35, "event": "route", "ref": "0", "value": "Released" }, { "time": 37, "event": "occupied", "ref": "sec3", "value": "false" }, { "time": 37, "event": "reserved", "ref": "sec3", "value": "false" }, { "time": 37, "event": "route", "ref": "0", "value": "Released" } ]}, "trains": {  "t1": { "params": { "length": 150, "max_acc": 1, "max_brk": 0.9, "max_vel":20 }, "events":[{ "time" : 0, "action": "Coast", "x": 0, "dx": 0, "v": 0, "edges": [{"n1": "n1b", "n2": "n2a", "start": 0, "end": 0}, {"n1": "n0b", "n2": "n1a", "start": 0, "end": 0}] },  { "time" : 4.47213595499958, "action": "Accel", "x" : 10.000000000000002, "dx" : 10.000000000000002, "v": 4.47213595499958, "edges": [{"n1": "n1b", "n2": "n2a", "start": 0, "end": 10.000000000000002}, {"n1": "n0b", "n2": "n1a", "start": 0, "end": 0}] },  { "time" : 10, "action": "Accel", "x" : 50, "dx" : 40, "v": 10, "edges": [{"n1": "n2b", "n2": "n3a", "start": 0, "end": 40}, {"n1": "n1b", "n2": "n2a", "start": 0, "end": 10.000000000000002}, {"n1": "n0b", "n2": "n1a", "start": 0, "end": 0}] },  { "time" : 17.320508075688775, "action": "Accel", "x" : 150.00000000000003, "dx" : 100.00000000000003, "v": 17.320508075688775, "edges": [{"n1": "n5b", "n2": "n6a", "start": 0, "end": 100.00000000000003}, {"n1": "n4b", "n2": "n5a", "start": 0, "end": 0}, {"n1": "n3b", "n2": "n4a", "start": 0, "end": 0}, {"n1": "n2b", "n2": "n3a", "start": 0, "end": 40}, {"n1": "n1b", "n2": "n2a", "start": 0.00000000000003019806626980426, "end": 10.000000000000002}] },  { "time" : 17.88854381999832, "action": "Accel", "x" : 160.00000000000003, "dx" : 9.999999999999988, "v": 17.88854381999832, "edges": [{"n1": "n6b", "n2": "n7a", "start": 0, "end": 9.999999999999988}, {"n1": "n5b", "n2": "n6a", "start": 0, "end": 100.00000000000003}, {"n1": "n4b", "n2": "n5a", "start": 0, "end": 0}, {"n1": "n3b", "n2": "n4a", "start": 0, "end": 0}, {"n1": "n2b", "n2": "n3a", "start": 0.00000000000002842170943040401, "end": 40}] },  { "time" : 20, "action": "Accel", "x" : 200, "dx" : 39.999999999999986, "v": 20, "edges": [{"n1": "n6b", "n2": "n7a", "start": 0, "end": 49.99999999999997}, {"n1": "n5b", "n2": "n6a", "start": 0, "end": 100.00000000000003}, {"n1": "n4b", "n2": "n5a", "start": 0, "end": 0}, {"n1": "n3b", "n2": "n4a", "start": 0, "end": 0}, {"n1": "n2b", "n2": "n3a", "start": 40, "end": 40}] },  { "time" : 22.5, "action": "Coast", "x" : 250, "dx" : 50, "v": 20, "edges": [{"n1": "n6b", "n2": "n7a", "start": 0, "end": 99.99999999999997}, {"n1": "n5b", "n2": "n6a", "start": 50, "end": 100.00000000000003}] },  { "time" : 25, "action": "Coast", "x" : 300, "dx" : 50, "v": 20, "edges": [{"n1": "n8b", "n2": "n9a", "start": 0, "end": 50}, {"n1": "n7b", "n2": "n8a", "start": 0, "end": 0}, {"n1": "n6b", "n2": "n7a", "start": 0, "end": 99.99999999999997}, {"n1": "n5b", "n2": "n6a", "start": 100, "end": 100.00000000000003}] },  { "time" : 27.5, "action": "Coast", "x" : 350, "dx" : 50, "v": 20, "edges": [{"n1": "n8b", "n2": "n9a", "start": 0, "end": 100}, {"n1": "n7b", "n2": "n8a", "start": 0, "end": 0}, {"n1": "n6b", "n2": "n7a", "start": 49.99999999999997, "end": 99.99999999999997}] },  { "time" : 29.5, "action": "Coast", "x" : 390, "dx" : 40, "v": 20, "edges": [{"n1": "n10b", "n2": "n11a", "start": 0, "end": 40}, {"n1": "n9b", "n2": "n10a", "start": 0, "end": 0}, {"n1": "n8b", "n2": "n9a", "start": 0, "end": 100}, {"n1": "n7b", "n2": "n8a", "start": 0, "end": 0}, {"n1": "n6b", "n2": "n7a", "start": 89.99999999999997, "end": 99.99999999999997}] },  { "time" : 30, "action": "Coast", "x" : 400, "dx" : 10, "v": 20, "edges": [{"n1": "n11b", "n2": "n12a", "start": 0, "end": 10}, {"n1": "n10b", "n2": "n11a", "start": 0, "end": 40}, {"n1": "n9b", "n2": "n10a", "start": 0, "end": 0}, {"n1": "n8b", "n2": "n9a", "start": 0, "end": 100}, {"n1": "n7b", "n2": "n8a", "start": 0, "end": 0}, {"n1": "n6b", "n2": "n7a", "start": 99.99999999999997, "end": 99.99999999999997}] },  { "time" : 35, "action": "Coast", "x" : 500, "dx" : 100, "v": 20, "edges": [{"n1": "n11b", "n2": "n12a", "start": 0, "end": 110}, {"n1": "n10b", "n2": "n11a", "start": 0, "end": 40}, {"n1": "n9b", "n2": "n10a", "start": 0, "end": 0}, {"n1": "n8b", "n2": "n9a", "start": 100, "end": 100}] },  { "time" : 37, "action": "Coast", "x" : 540, "dx" : 40, "v": 20, "edges": [{"n1": "n11b", "n2": "n12a", "start": 0, "end": 150}, {"n1": "n10b", "n2": "n11a", "start": 40, "end": 40}] },  { "time" : 60, "action": "Coast", "x" : 1000, "dx" : 460, "v": 20, "edges": [{"n1": "n11b", "n2": "n12a", "start": 460, "end": 610}] },  { "time" : 67.5, "action": "Coast", "x" : 1150, "dx" : 150, "v": 20, "edges": [{"n1": "b2", "n2": null, "start": 0, "end": 150}, {"n1": "n11b", "n2": "n12a", "start": 610, "end": 610}] } ] } }  };