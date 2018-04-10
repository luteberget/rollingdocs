var data = { "infrastructure": {
"nodes":{"b1": { "other_node": "n1" }, "n1": { "other_node": "b1" }, "n2": { "other_node": "n3" }, "n3": { "other_node": "n2" }, "n4": { "other_node": "n5" }, "n5": { "other_node": "n4" }, "n6": { "other_node": "n7" }, "n7": { "other_node": "n6" }, "n8": { "other_node": "n9" }, "n9": { "other_node": "n8" }, "n10": { "other_node": "n11" }, "n11": { "other_node": "n10" }, "n12": { "other_node": "n13" }, "n13": { "other_node": "n12" }, "n14": { "other_node": "b2" }, "b2": { "other_node": "n14" }},"objects":{ "s1": { "type":"signal", "node": "n5" } ,  "s2": { "type":"signal", "node": "n9" } ,  "s3": { "type":"signal", "node": "n13" } },"events":[{ "time": 0, "event": "route", "ref": "0", "value": "Pending" }, { "time": 0, "event": "route", "ref": "0", "value": "Active" }, { "time": 0, "event": "route", "ref": "0", "value": "Pending" }, { "time": 0, "event": "reserved", "ref": "a1", "value": "true" }, { "time": 0, "event": "signal", "ref": "s1", "value": "green" }, { "time": 0, "event": "route", "ref": "0", "value": "Active" }, { "time": 22.5, "event": "occupied", "ref": "a1", "value": "true" }, { "time": 22.5, "event": "signal", "ref": "s1", "value": "red" }, { "time": 150, "event": "route", "ref": "0", "value": "Pending" }, { "time": 150, "event": "reserved", "ref": "a2", "value": "true" }, { "time": 150, "event": "signal", "ref": "s2", "value": "green" }, { "time": 150, "event": "route", "ref": "0", "value": "Active" }, { "time": 150, "event": "route", "ref": "0", "value": "Pending" }, { "time": 150, "event": "signal", "ref": "s3", "value": "green" }, { "time": 150, "event": "route", "ref": "0", "value": "Active" }, { "time": 156.32455532033677, "event": "occupied", "ref": "a2", "value": "true" }, { "time": 156.32455532033677, "event": "signal", "ref": "s2", "value": "red" }, { "time": 171, "event": "occupied", "ref": "a1", "value": "false" }, { "time": 171, "event": "reserved", "ref": "a1", "value": "false" }, { "time": 171, "event": "route", "ref": "0", "value": "Released" }, { "time": 215.88555461025308, "event": "occupied", "ref": "a3", "value": "true" }, { "time": 215.88555461025308, "event": "signal", "ref": "s3", "value": "red" }, { "time": 226.3308207721936, "event": "occupied", "ref": "a2", "value": "false" }, { "time": 226.3308207721936, "event": "reserved", "ref": "a2", "value": "false" }, { "time": 226.3308207721936, "event": "route", "ref": "0", "value": "Released" }, { "time": 251.3308207721936, "event": "occupied", "ref": "a3", "value": "false" } ]}, "trains": {  "t1": { "params": { "length": 200, "max_acc": 1, "max_brk": 0.9, "max_vel":10 }, "events":[{ "time" : 0, "action": "Coast", "x": 0, "dx": 0, "v": 0, "edges": [{"n1": "n1", "n2": "n2", "start": 0, "end": 0}] },  { "time" : 1.4142135623730951, "action": "Accel", "x" : 1.0000000000000002, "dx" : 1.0000000000000002, "v": 1.4142135623730951, "edges": [{"n1": "n1", "n2": "n2", "start": 0, "end": 1.0000000000000002}] },  { "time" : 20, "action": "Accel", "x" : 200, "dx" : 199, "v": 20, "edges": [{"n1": "n3", "n2": "n4", "start": 0, "end": 199}, {"n1": "n1", "n2": "n2", "start": 0.0000000000000002220446049250313, "end": 1.0000000000000002}] },  { "time" : 20.05, "action": "Coast", "x" : 201, "dx" : 1.0000000000000142, "v": 20, "edges": [{"n1": "n3", "n2": "n4", "start": 0, "end": 200}, {"n1": "n1", "n2": "n2", "start": 1.0000000000000002, "end": 1.0000000000000002}] },  { "time" : 22.5, "action": "Coast", "x" : 250, "dx" : 48.999999999999986, "v": 20, "edges": [{"n1": "n3", "n2": "n4", "start": 49, "end": 249}] },  { "time" : 32.5, "action": "Coast", "x" : 450, "dx" : 200, "v": 20, "edges": [{"n1": "n5", "n2": "n6", "start": 0, "end": 200}, {"n1": "n3", "n2": "n4", "start": 249, "end": 249}] },  { "time" : 80, "action": "Coast", "x" : 1400, "dx" : 950, "v": 20, "edges": [{"n1": "n5", "n2": "n6", "start": 950, "end": 1150}] },  { "time" : 90, "action": "Coast", "x" : 1600, "dx" : 200, "v": 20, "edges": [{"n1": "n7", "n2": "n8", "start": 0, "end": 200}, {"n1": "n5", "n2": "n6", "start": 1150, "end": 1150}] },  { "time" : 97.88888888888889, "action": "Coast", "x" : 1757.7777777777778, "dx" : 157.77777777777771, "v": 20, "edges": [{"n1": "n7", "n2": "n8", "start": 157.77777777777771, "end": 357.7777777777777}] },  { "time" : 120.11111111111111, "action": "Brake", "x" : 1980, "dx" : 222.22222222222223, "v": 0, "edges": [{"n1": "n7", "n2": "n8", "start": 380, "end": 580}] },  { "time" : 150, "action": "Coast", "x" : 1980, "dx" : 0, "v": 0, "edges": [{"n1": "n7", "n2": "n8", "start": 380, "end": 580}] },  { "time" : 156.32455532033677, "action": "Accel", "x" : 2000, "dx" : 20.000000000000075, "v": 6.324555320336771, "edges": [{"n1": "n7", "n2": "n8", "start": 400.0000000000001, "end": 600.0000000000001}] },  { "time" : 170, "action": "Accel", "x" : 2180, "dx" : 179.99999999999991, "v": 20, "edges": [{"n1": "n9", "n2": "n10", "start": 0, "end": 179.99999999999991}, {"n1": "n7", "n2": "n8", "start": 580, "end": 600.0000000000001}] },  { "time" : 171, "action": "Coast", "x" : 2200, "dx" : 20, "v": 20, "edges": [{"n1": "n9", "n2": "n10", "start": 0, "end": 199.99999999999991}, {"n1": "n7", "n2": "n8", "start": 600, "end": 600.0000000000001}] },  { "time" : 198.88888888888889, "action": "Coast", "x" : 2757.777777777778, "dx" : 557.7777777777777, "v": 20, "edges": [{"n1": "n9", "n2": "n10", "start": 557.7777777777776, "end": 757.7777777777776}] },  { "time" : 210.05569514325978, "action": "Brake", "x" : 2925, "dx" : 167.22222222222229, "v": 9.949874371066192, "edges": [{"n1": "n9", "n2": "n10", "start": 724.9999999999999, "end": 924.9999999999999}] },  { "time" : 215.88555461025308, "action": "Accel", "x" : 3000, "dx" : 74.99999999999991, "v": 15.77973383805949, "edges": [{"n1": "n11", "n2": "n12", "start": 0, "end": 74.99999999999991}, {"n1": "n9", "n2": "n10", "start": 799.9999999999998, "end": 924.9999999999999}] },  { "time" : 220.1058207721936, "action": "Accel", "x" : 3075.5000000000005, "dx" : 75.50000000000026, "v": 20.000000000000007, "edges": [{"n1": "n13", "n2": "n14", "start": 0, "end": 75.50000000000026}, {"n1": "n11", "n2": "n12", "start": 0, "end": 74.99999999999991}, {"n1": "n9", "n2": "n10", "start": 875.5, "end": 924.9999999999999}] },  { "time" : 222.5808207721936, "action": "Coast", "x" : 3125.0000000000005, "dx" : 49.4999999999999, "v": 20.000000000000007, "edges": [{"n1": "n13", "n2": "n14", "start": 0, "end": 125.00000000000016}, {"n1": "n11", "n2": "n12", "start": 0.00000000000007105427357601002, "end": 74.99999999999991}] },  { "time" : 226.3308207721936, "action": "Coast", "x" : 3200.0000000000005, "dx" : 75.00000000000003, "v": 20.000000000000007, "edges": [{"n1": "n13", "n2": "n14", "start": 0.00000000000017053025658242404, "end": 200.00000000000017}] },  { "time" : 241.3308207721936, "action": "Coast", "x" : 3500.0000000000005, "dx" : 300.0000000000001, "v": 20.000000000000007, "edges": [{"n1": "n13", "n2": "n14", "start": 300.0000000000003, "end": 500.0000000000003}] },  { "time" : 251.3308207721936, "action": "Coast", "x" : 3700.0000000000005, "dx" : 200.00000000000006, "v": 20.000000000000007, "edges": [{"n1": "b2", "n2": null, "start": 0.00000000000005684341886080802, "end": 200.00000000000006}] } ] } }  };