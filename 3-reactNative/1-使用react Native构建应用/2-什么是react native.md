# 什么是react Native/它存在的意义

## video1

React Native使你能够使用react构建原生ios和android应用。听起来好像太完美了 不太真实 但真的很实用。沃尔玛、特斯拉都在一定程度地在它们的移动应用中使用了react Native，但是我觉得react native对小型初创企业作用更大，有了react Native不需要另外再组件网页开发团队ios team和Android team.只需要一个ui team就可以了，为企业缩短开发时间和资金，你可能听过一句话 “write once,run anywhere”,这句话的理念就是可以将一个仓库应用到网页、ios、平台和android平台上，但实际操作起来很难实现，因为每种平台都具有独特的体验，与“write once,run anywhere”不同，react 的座右铭是“learn once,write anywhere”,学习react之后，你将能够采用这些相同的规则 构建不仅适用于网页版还适用于ios和android等原生平台的UI。我们是在不同的平台之间分享相同的规则，而不是分享相同的仓库，这些规则包括组件合成和声明式UI。

## React Native 解密
当 React 首次推出时，一个很大的卖点就是**虚拟 DOM**。这已是现在大多数 UI 库的标配，但当它刚推出时，确实是极具突破性的！我们可以通过分解调用 `setState()` 会发生的过程，来看看虚拟 DOM 究竟是什么。

调用 `setState()` 后 React 所做的第一件事是将传递给 `setState() `的对象合并到组件的当前状态。这会启动一个叫做[调节](https://reactjs.org/docs/reconciliation.html) 的过程。调节的最终目的是以最有效的方式更新基于这种新状态的用户界面。为此，React 将构建一个新的 React 元素树（你可以将其视为 UI 的对象表现形式）。一旦有了这个新树，React 就会使用 "diff" 命令将它与之前的元素树进行比较，以便弄清 UI 如何响应新的状态而改变。通过这样做，React 将会知道发生的具体变化，并且通过了解发生的具体变化，它将能够仅在绝对必要的情况下进行更新，以最大限度地减少 UI 的占用空间。

创建 DOM 的对象表现形式的这个过程是 "Virtual DOM" 背后的整体思想。但是，如果我们不想以 DOM 为目标进行渲染，而是将另一个平台作为渲染目标 -- 比如说 iOS 或 Android。理论上来说，DOM 只是一个实现细节。除了这个名字本身（在我看来，它更像是一种营销手段）外，没有什么可以将虚拟 DOM 概念与实际 DOM 相结合。这正是 React Native 背后的思想。React Native 不是渲染到 web 的 DOM，而是渲染原生 iOS 或 Android 视图。这使我们可以只使用 React Native 来构建原生 iOS 和 Android 应用。

## 总结
React Native 的"仅需学习一次，编写任何平台"方法让我们能够使用熟知的相同原理，面向 web 和原生平台进行开发。毕竟，根本上来说，无论是用 React 构建的 web 应用，还是用 React Native 构建的移动应用，很多虚拟 DOM、调节和 diff 算法都适用。

## 进一步研究
[React Native 中的桥接](https://tadeuzagallo.com/blog/react-native-bridge/)