# 2.创建action

## video1

redux action类似于自定义事件，就像不同类型的点击事件一样，双击、按键、鼠标进入等等。我们可以创建redux action来表示应用中发生的不同类型的事件或action,了解了redux action与本地事件的相似性后，我们看看如何创建action.

## video2
在redux中创建action是非常简单的，它只是一个javascript对象，表明一个对象为redux action的一点是 它必须有一个type属性，这个值完全取决于你 并描述发生了什么。并且它的所有字母都大写。

```
{
type:'EDIT_USER'
id:917
}
```
像此action表示发生了EDIT_USER事件，那么就像原生事件包括有关事件本身的详情，redux action也可包含数据，通过在action中添加id,我们包含了应编辑哪位用户。这就是在redux中创建action所需的全部操作。

Action 是 JavaScript 对象，用于描述需要更新应用状态的任何事件。这些对象必须具有 type 属性，以便区分发生的特定 action 类型。

```
const LOAD_PROFILE = 'LOAD_PROFILE';

const myAction = {
  type: LOAD_PROFILE
};
```

当 type 所描述的行为发生时，任何与该行为相关的数据都可以作为 action 的属性被传入 action 内（换句话说，是普通的 JavaScript 对象）。

### 💡 Action 建议 💡
在构建 action 对象时需要注意以下几点：

最好将 type 属性的值设为常量，而不是字符串。二者都可行，但是使用常量的话，如果出现任何拼写错误（例如 LAOD_PROFILE 与 LOAD_PROFILE），控制台将显示错误，而不是毫无提示地运行失败。
使载荷数据尽量很小。让你的资源仅发送必要的数据！

## Action Creators
Redux action 是 JavaScript 对象，用于描述应该更新应用状态的任何事件。但是，普通对象不易移植。为了使 action 更易移植并更容易测试，它们通常封装在函数里。这些函数称为 action creator。术语“action creator”很好理解，因为它就是一个创建和返回 action 的函数。

```
const submitUser = user => ({
  type: SUBMIT_USER,
  user
});
```

现在，只要我们需要 SUBMIT_USER action，就可以调用 submitUser() 函数，向其传入 user，它将生成该 action！