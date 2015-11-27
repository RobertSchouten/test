// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


//========================== On Load =================================================
cur_frm.cscript.onload = function(doc, cdt, cdn) {
	if (!doc.transaction_date) doc.transaction_date = dateutil.obj_to_str(new Date());
}


// ***************** Get Account Head *****************
cur_frm.fields_dict['closing_account_head'].get_query = function(doc, cdt, cdn) {
	return{
		filters:{
			"company": doc.company,
			"root_type": "Liability",
			"freeze_account": "No",
			"is_group": 0
		}
	}
}
