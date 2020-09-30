export default {
    border: true,
    index: true,
    indexLabel: '序号',
    labelWidth: 120,
    selection: true,
    menuBtn: true,
    menuWidth: 300,
    align: 'center',
    menuAlign: 'center',
    columnBtn: false, //是否显示显影按钮
    delBtn: false,   //是否显示删除按钮
    addBtn: true,   //是否显示添加按钮
    addTitle: '新增集群',//添加弹窗标题
    editBtn: true,  //是否显示编辑按钮
    viewBtn: false, //是否显示查看按钮
    saveBtn: true,  //是否显示提交按钮
    updateBtn: true, //是否显示更新按钮
    cancelBtn: true, //是否显示取消按钮
    column: [{
        label: "集群名称",
        prop: "clusterName",
        fixed: true,
        search: true,
        rules: [{
            required: true,
            message: "请输入集群名称",
            trigger: "blur"
        }]
    }, {
        label: "状态",
        prop: "status",
        fixed: true,
        type: 'select',
        value: 1,
        dicData: [{
            label: '可用',
            value: 1
        }, {
            label: '不可用',
            value: 0
        }]
    }, {
        label: "备注",
        prop: "remake",
        fixed: true,
        span: 24,
        type: 'textarea',
        minRows: 3
    }]
}
