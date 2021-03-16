import { TypeTestData } from '../../src/types';

const PullRequestReviewCommentEventTests: TypeTestData = {
  testEvents: {
    created: [],
  },
};

PullRequestReviewCommentEventTests.testEvents.created = [
  {
    propSets: [
      {
        date: new Date('2021-02-13T05:38:31Z'),
        private: false,
        type: 'PullRequestReviewCommentEvent',
        actor: {
          id: 'paq',
          url: 'https://github.com/paq',
        },
        actionType: 'created',
        verb: 'added',
        result: ['a comment', 'comments'],
        subject: {
          id: 575624667,
          url:
            'https://github.com/ruffle-rs/ruffle/pull/3213#discussion_r575624667',
          preposition: undefined,
          desc: undefined,
          title: 575624667,
          content:
            'It seems that `coerce_to_string` is necessary here as well.\r\n\r\nTest code\r\n```as\r\nimport flash.utils.ByteArray;\r\nimport flash.utils.Endian;\r\n\r\nclass A {\r\n    public function A() {}\r\n    public function toString():String {\r\n        return "shift-jis";\r\n    }\r\n}\r\n\r\nvar test = new ByteArray();\r\ntest.writeMultiByte("次", new A());\r\ntest.position = 0;\r\ntrace(test.readMultiByte(2, "shift-jis"));\r\n```\r\n\r\nFlash player prints `次`.\r\nRuffle prints `谺`.\r\n',
        },
        target: {
          preposition: 'on',
          id: 572153821,
          desc: 'pull request',
          title: 'avm2: Implement ByteArray',
          url: 'https://github.com/ruffle-rs/ruffle/pull/3213',
          content: undefined,
        },
        parent: {
          id: 'ruffle-rs/ruffle',
          title: 'ruffle-rs/ruffle',
          url: 'https://github.com/ruffle-rs/ruffle',
          desc: undefined,
          preposition: 'in',
          content: undefined,
        },
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'February 13, 2021',
          actor: 'paq',
          verb: 'added',
          subject: '575624667',
          content:
            'It seems that `coerce_to_string` is necessary here as well.\r\n\r\nTest code\r\n```as\r\nimport flash.utils.ByteArray;\r\nimport flash.utils.Endian;\r\n\r\nclass A {\r\n    public function A() {}\r\n    public function toString():String {\r\n        return "shift-jis";\r\n    }\r\n}\r\n\r\nvar test = new ByteArray();\r\ntest.writeMultiByte("次", new A());\r\ntest.position = 0;\r\ntrace(test.readMultiByte(2, "shift-jis"));\r\n```\r\n\r\nFlash player prints `次`.\r\nRuffle prints `谺`.\r\n',
          target: 'on pull request avm2: Implement ByteArray',
          parent: 'in ruffle-rs/ruffle',
        },
        md: {
          date: 'February 13, 2021',
          actor: '[paq](https://github.com/paq)',
          verb: 'added',
          subject:
            '[575624667](https://github.com/ruffle-rs/ruffle/pull/3213#discussion_r575624667)',
          content:
            'It seems that `coerce_to_string` is necessary here as well.\r\n\r\nTest code\r\n```as\r\nimport flash.utils.ByteArray;\r\nimport flash.utils.Endian;\r\n\r\nclass A {\r\n    public function A() {}\r\n    public function toString():String {\r\n        return "shift-jis";\r\n    }\r\n}\r\n\r\nvar test = new ByteArray();\r\ntest.writeMultiByte("次", new A());\r\ntest.position = 0;\r\ntrace(test.readMultiByte(2, "shift-jis"));\r\n```\r\n\r\nFlash player prints `次`.\r\nRuffle prints `谺`.\r\n',
          target:
            'on pull request [avm2: Implement ByteArray](https://github.com/ruffle-rs/ruffle/pull/3213)',
          parent: 'in [ruffle-rs/ruffle](https://github.com/ruffle-rs/ruffle)',
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['February 13, 2021'],
            'paq added a comment 575624667 on pull request avm2: Implement ByteArray in ruffle-rs/ruffle',
            'It seems that `coerce_to_string` is necessary here as well.\r\n\r\nTest code\r\n```as\r\nimport flash.utils.ByteArray;\r\nimport flash.utils.Endian;\r\n\r\nclass A {\r\n    public function A() {}\r\n    public function toString():String {\r\n        return "shift-jis";\r\n    }\r\n}\r\n\r\nvar test = new ByteArray();\r\ntest.writeMultiByte("次", new A());\r\ntest.position = 0;\r\ntrace(test.readMultiByte(2, "shift-jis"));\r\n```\r\n\r\nFlash player prints `次`.\r\nRuffle prints `谺`.\r\n',
          ],
          md: [
            ['February 13, 2021'],
            '[paq](https://github.com/paq) added a comment [575624667](https://github.com/ruffle-rs/ruffle/pull/3213#discussion_r575624667) on pull request [avm2: Implement ByteArray](https://github.com/ruffle-rs/ruffle/pull/3213) in [ruffle-rs/ruffle](https://github.com/ruffle-rs/ruffle)',
            'It seems that `coerce_to_string` is necessary here as well.\r\n\r\nTest code\r\n```as\r\nimport flash.utils.ByteArray;\r\nimport flash.utils.Endian;\r\n\r\nclass A {\r\n    public function A() {}\r\n    public function toString():String {\r\n        return "shift-jis";\r\n    }\r\n}\r\n\r\nvar test = new ByteArray();\r\ntest.writeMultiByte("次", new A());\r\ntest.position = 0;\r\ntrace(test.readMultiByte(2, "shift-jis"));\r\n```\r\n\r\nFlash player prints `次`.\r\nRuffle prints `谺`.\r\n',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['February 13, 2021'],
            'paq added a comment 575624667 on pull request avm2: Implement ByteArray in ruffle-rs/ruffle',
            'It seems that `coerce_to_string` is necessary here as well.\r\n\r\nTest code\r\n```as\r\nimport flash.utils.ByteArray;\r\nimport flash.utils.Endian;\r\n\r\nclass A {\r\n    public function A() {}\r\n    public function toString():String {\r\n        return "shift-jis";\r\n    }\r\n}\r\n\r\nvar test = new ByteArray();\r\ntest.writeMultiByte("次", new A());\r\ntest.position = 0;\r\ntrace(test.readMultiByte(2, "shift-jis"));\r\n```\r\n\r\nFlash player prints `次`.\r\nRuffle prints `谺`.\r\n',
          ],
          md: [
            ['February 13, 2021'],
            '[paq](https://github.com/paq) added a comment [575624667](https://github.com/ruffle-rs/ruffle/pull/3213#discussion_r575624667) on pull request [avm2: Implement ByteArray](https://github.com/ruffle-rs/ruffle/pull/3213) in [ruffle-rs/ruffle](https://github.com/ruffle-rs/ruffle)',
            'It seems that `coerce_to_string` is necessary here as well.\r\n\r\nTest code\r\n```as\r\nimport flash.utils.ByteArray;\r\nimport flash.utils.Endian;\r\n\r\nclass A {\r\n    public function A() {}\r\n    public function toString():String {\r\n        return "shift-jis";\r\n    }\r\n}\r\n\r\nvar test = new ByteArray();\r\ntest.writeMultiByte("次", new A());\r\ntest.position = 0;\r\ntrace(test.readMultiByte(2, "shift-jis"));\r\n```\r\n\r\nFlash player prints `次`.\r\nRuffle prints `谺`.\r\n',
          ],
        },
      ],
    },
    events: [
      {
        id: '15171845994',
        type: 'PullRequestReviewCommentEvent',
        actor: {
          id: 218905,
          login: 'paq',
          display_login: 'paq',
          gravatar_id: '',
          url: 'https://api.github.com/users/paq',
          avatar_url: 'https://avatars.githubusercontent.com/u/218905?',
        },
        repo: {
          id: 183483988,
          name: 'ruffle-rs/ruffle',
          url: 'https://api.github.com/repos/ruffle-rs/ruffle',
        },
        payload: {
          action: 'created',
          comment: {
            url:
              'https://api.github.com/repos/ruffle-rs/ruffle/pulls/comments/575624667',
            pull_request_review_id: 589945590,
            id: 575624667,
            node_id: 'MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDU3NTYyNDY2Nw==',
            diff_hunk:
              "@@ -0,0 +1,939 @@\n+use crate::avm2::activation::Activation;\n+use crate::avm2::bytearray::Endian;\n+use crate::avm2::class::Class;\n+use crate::avm2::method::Method;\n+use crate::avm2::names::{Namespace, QName};\n+use crate::avm2::object::{Object, TObject};\n+use crate::avm2::string::AvmString;\n+use crate::avm2::traits::Trait;\n+use crate::avm2::value::Value;\n+use crate::avm2::Error;\n+use encoding_rs::Encoding;\n+use encoding_rs::UTF_8;\n+use gc_arena::{GcCell, MutationContext};\n+\n+/// Implements `flash.utils.ByteArray`'s instance constructor.\n+pub fn instance_init<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(this) = this {\n+        activation.super_init(this, &[])?;\n+    }\n+\n+    Ok(Value::Undefined)\n+}\n+\n+/// Implements `flash.utils.ByteArray`'s class constructor.\n+pub fn class_init<'gc>(\n+    _activation: &mut Activation<'_, 'gc, '_>,\n+    _this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    Ok(Value::Undefined)\n+}\n+\n+/// Writes a single byte to the bytearray\n+pub fn write_byte<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let byte = args\n+            .get(0)\n+            .cloned()\n+            .unwrap_or(Value::Undefined)\n+            .coerce_to_i32(activation)?;\n+        bytearray.write_byte(byte as u8);\n+    }\n+\n+    Ok(Value::Undefined)\n+}\n+\n+/// Writes multiple bytes to the bytearray from another bytearray\n+pub fn write_bytes<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(Value::Object(second_array)) = args.get(0) {\n+        let combining_storage = second_array.as_bytearray().unwrap().reborrow();\n+        let combining_bytes = combining_storage.bytes();\n+        let offset = args\n+            .get(1)\n+            .unwrap_or(&Value::Unsigned(0))\n+            .coerce_to_u32(activation)? as usize;\n+        let length = args\n+            .get(2)\n+            .unwrap_or(&Value::Unsigned(0))\n+            .coerce_to_u32(activation)? as usize;\n+\n+        // In the docs it says \"If offset or length is out of range, they are clamped to the beginning and end of the bytes array.\"\n+        // However, in the actual flash player, it seems to just raise an error.\n+        if offset + length > combining_bytes.len() {\n+            log::error!(\"ByteArray: Reached EOF\");\n+            return Ok(Value::Undefined);\n+        }\n+\n+        if let Some(mut bytearray) = this\n+            .unwrap()\n+            .as_bytearray_mut(activation.context.gc_context)\n+        {\n+            bytearray.write_bytes(if length != 0 {\n+                &combining_bytes[offset..length + offset]\n+            } else {\n+                &combining_bytes[offset..]\n+            });\n+        }\n+    }\n+\n+    Ok(Value::Undefined)\n+}\n+\n+// Reads the bytes from the current bytearray into another bytearray\n+pub fn read_bytes<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    let mut merging_buffer: Vec<u8> = Vec::new();\n+    let mut offset = 0;\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let combining_bytes = bytearray.bytes();\n+        offset = args\n+            .get(1)\n+            .unwrap_or(&Value::Unsigned(0))\n+            .coerce_to_u32(activation)? as usize;\n+        let length = args\n+            .get(2)\n+            .unwrap_or(&Value::Unsigned(0))\n+            .coerce_to_u32(activation)? as usize;\n+\n+        if bytearray.position() + length > combining_bytes.len() {\n+            log::error!(\"ByteArray: Reached EOF\");\n+            return Ok(Value::Undefined);\n+        }\n+\n+        merging_buffer = if length != 0 {\n+            combining_bytes[bytearray.position()..length + bytearray.position()].to_vec()\n+        } else {\n+            combining_bytes[bytearray.position()..].to_vec()\n+        };\n+        {\n+            bytearray.add_position(merging_buffer.len());\n+        }\n+    }\n+    // We borrow the 2 bytearrays seperately in case they are trying to add 2 of the same bytearrays together (would panic otherwise)\n+    if let Some(Value::Object(second_array)) = args.get(0) {\n+        let mut merging_storage = second_array\n+            .as_bytearray_mut(activation.context.gc_context)\n+            .unwrap();\n+        // Offset should not be greater then the buffer\n+        if merging_storage.bytes().len() < offset {\n+            return Ok(Value::Undefined);\n+        }\n+        merging_storage.write_bytes_at(&merging_buffer, offset);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_utf<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Some(utf_string) = args.get(0) {\n+            let utf_string = utf_string.coerce_to_string(activation)?;\n+            bytearray.write_utf(&utf_string.as_str());\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_utf<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(utf_string) = bytearray.read_utf() {\n+            return Ok(AvmString::new(activation.context.gc_context, utf_string).into());\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+pub fn to_string<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(bytearray) = this.unwrap().as_bytearray() {\n+        let bytes = bytearray.bytes();\n+        let (new_string, _, _) = UTF_8.decode(bytes);\n+        return Ok(AvmString::new(activation.context.gc_context, new_string).into());\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn clear<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        bytearray.clear();\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn position<'gc>(\n+    _activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(bytearray) = this.unwrap().as_bytearray() {\n+        return Ok(Value::Unsigned(bytearray.position() as u32));\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn set_position<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args\n+            .get(0)\n+            .unwrap_or(&Value::Integer(0))\n+            .coerce_to_u32(activation)?;\n+        bytearray.set_position(num as usize);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn bytes_available<'gc>(\n+    _activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(bytearray) = this.unwrap().as_bytearray() {\n+        return Ok(Value::Unsigned(\n+            if bytearray.position() > bytearray.bytes().len() {\n+                0\n+            } else {\n+                (bytearray.bytes().len() - bytearray.position()) as u32\n+            },\n+        ));\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn bytes_length<'gc>(\n+    _activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(bytearray) = this.unwrap().as_bytearray() {\n+        return Ok(Value::Unsigned(bytearray.bytes().len() as u32));\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn set_bytes_length<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let len = args\n+            .get(0)\n+            .unwrap_or(&Value::Unsigned(0))\n+            .coerce_to_u32(activation)\n+            .unwrap() as usize;\n+        bytearray.resize(len);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn endian<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(bytearray) = this.unwrap().as_bytearray() {\n+        return Ok(match bytearray.endian() {\n+            Endian::Big => AvmString::new(activation.context.gc_context, \"bigEndian\").into(),\n+            Endian::Little => AvmString::new(activation.context.gc_context, \"littleEndian\").into(),\n+        });\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn set_endian<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        match args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_string(activation)?\n+            .as_str()\n+        {\n+            \"bigEndian\" => bytearray.set_endian(Endian::Big),\n+            \"littleEndian\" => bytearray.set_endian(Endian::Little),\n+            _ => log::error!(\"Parameter type must be one of the accepted values.\"),\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_short<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_short() {\n+            return Ok(Value::Integer(num as i32));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_unsigned_short<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_unsigned_short() {\n+            return Ok(Value::Unsigned(num as u32));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_double<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_double() {\n+            return Ok(Value::Number(num));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_float<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_float() {\n+            return Ok(Value::Number(num as f64));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_int<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_int() {\n+            return Ok(Value::Integer(num));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_unsigned_int<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_unsigned_int() {\n+            return Ok(Value::Unsigned(num));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_boolean<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_boolean() {\n+            return Ok(Value::Bool(num));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_byte<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_byte() {\n+            return Ok(Value::Integer(num as i32));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_utf_bytes<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Some(Value::Integer(len)) = args.get(0) {\n+            if *len < 0 {\n+                log::error!(\"ByteArray: Did not get proper length\");\n+                return Ok(Value::Undefined);\n+            }\n+            if let Ok(bytes) = bytearray.read_exactly(*len as usize) {\n+                return Ok(AvmString::new(\n+                    activation.context.gc_context,\n+                    String::from_utf8_lossy(&bytes),\n+                )\n+                .into());\n+            }\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_unsigned_byte<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_unsigned_byte() {\n+            return Ok(Value::Unsigned(num as u32));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_float<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_number(activation)?;\n+        bytearray.write_float(num as f32);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_double<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_number(activation)?;\n+        bytearray.write_double(num);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_boolean<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args.get(0).unwrap_or(&Value::Undefined).coerce_to_boolean();\n+        bytearray.write_boolean(num);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_int<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_i32(activation)?;\n+        bytearray.write_int(num);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_unsigned_int<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_u32(activation)?;\n+        bytearray.write_unsigned_int(num);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_short<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_i32(activation)?;\n+        bytearray.write_short(num as i16);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_multibyte<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let string = args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_string(activation)?;\n+        let mut charset_label = \"utf-8\";\n+        if let Some(Value::String(charset)) = args.get(1) {\n+            charset_label = charset;\n+        }",
            path: 'core/src/avm2/globals/flash/utils/bytearray.rs',
            position: 611,
            original_position: 611,
            commit_id: 'f563431032838c08537f810fbc3e61d08d1f1537',
            original_commit_id: 'f563431032838c08537f810fbc3e61d08d1f1537',
            user: {
              login: 'paq',
              id: 218905,
              node_id: 'MDQ6VXNlcjIxODkwNQ==',
              avatar_url: 'https://avatars.githubusercontent.com/u/218905?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/paq',
              html_url: 'https://github.com/paq',
              followers_url: 'https://api.github.com/users/paq/followers',
              following_url:
                'https://api.github.com/users/paq/following{/other_user}',
              gists_url: 'https://api.github.com/users/paq/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/paq/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/paq/subscriptions',
              organizations_url: 'https://api.github.com/users/paq/orgs',
              repos_url: 'https://api.github.com/users/paq/repos',
              events_url: 'https://api.github.com/users/paq/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/paq/received_events',
              type: 'User',
              site_admin: false,
            },
            body:
              'It seems that `coerce_to_string` is necessary here as well.\r\n\r\nTest code\r\n```as\r\nimport flash.utils.ByteArray;\r\nimport flash.utils.Endian;\r\n\r\nclass A {\r\n    public function A() {}\r\n    public function toString():String {\r\n        return "shift-jis";\r\n    }\r\n}\r\n\r\nvar test = new ByteArray();\r\ntest.writeMultiByte("次", new A());\r\ntest.position = 0;\r\ntrace(test.readMultiByte(2, "shift-jis"));\r\n```\r\n\r\nFlash player prints `次`.\r\nRuffle prints `谺`.\r\n',
            created_at: '2021-02-13T05:38:31Z',
            updated_at: '2021-02-13T05:38:32Z',
            html_url:
              'https://github.com/ruffle-rs/ruffle/pull/3213#discussion_r575624667',
            pull_request_url:
              'https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213',
            author_association: 'CONTRIBUTOR',
            _links: {
              self: {
                href:
                  'https://api.github.com/repos/ruffle-rs/ruffle/pulls/comments/575624667',
              },
              html: {
                href:
                  'https://github.com/ruffle-rs/ruffle/pull/3213#discussion_r575624667',
              },
              pull_request: {
                href:
                  'https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213',
              },
            },
            start_line: 609,
            original_start_line: 609,
            start_side: 'RIGHT',
            line: 611,
            original_line: 611,
            side: 'RIGHT',
          },
          pull_request: {
            url: 'https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213',
            id: 572153821,
            node_id: 'MDExOlB1bGxSZXF1ZXN0NTcyMTUzODIx',
            html_url: 'https://github.com/ruffle-rs/ruffle/pull/3213',
            diff_url: 'https://github.com/ruffle-rs/ruffle/pull/3213.diff',
            patch_url: 'https://github.com/ruffle-rs/ruffle/pull/3213.patch',
            issue_url:
              'https://api.github.com/repos/ruffle-rs/ruffle/issues/3213',
            number: 3213,
            state: 'open',
            locked: false,
            title: 'avm2: Implement ByteArray',
            user: {
              login: 'EmperorBale',
              id: 37880918,
              node_id: 'MDQ6VXNlcjM3ODgwOTE4',
              avatar_url:
                'https://avatars.githubusercontent.com/u/37880918?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/EmperorBale',
              html_url: 'https://github.com/EmperorBale',
              followers_url:
                'https://api.github.com/users/EmperorBale/followers',
              following_url:
                'https://api.github.com/users/EmperorBale/following{/other_user}',
              gists_url:
                'https://api.github.com/users/EmperorBale/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/EmperorBale/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/EmperorBale/subscriptions',
              organizations_url:
                'https://api.github.com/users/EmperorBale/orgs',
              repos_url: 'https://api.github.com/users/EmperorBale/repos',
              events_url:
                'https://api.github.com/users/EmperorBale/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/EmperorBale/received_events',
              type: 'User',
              site_admin: false,
            },
            body:
              "This PR implements flash.utils.ByteArray, and also flash.utils.Endian (which just has 2 constants)\r\n\r\nIn the ByteArray, the following properties are not implemented yet:\r\n\r\n- ByteArray.shareable\r\n- ByteArray.objectEncoding\r\n- ByteArray.defaultObjectEncoding\r\n\r\nAnd the following methods are not implemented yet:\r\n\r\n- ByteArray.atomicCompareAndSwapIntAt()\r\n- ByteArray.atomicCompareAndSwapLength()\r\n- ByteArray.readObject()\r\n- ByteArray.writeObject()\r\n- ByteArray.toJSON()\n\nCompression is working, but I haven't added support for lzma.",
            created_at: '2021-02-11T22:29:49Z',
            updated_at: '2021-02-13T05:38:32Z',
            closed_at: null,
            merged_at: null,
            merge_commit_sha: '54084be4215e6efa75fad83bde85268fa8c0c595',
            assignee: null,
            assignees: [],
            requested_reviewers: [],
            requested_teams: [],
            labels: [],
            milestone: null,
            draft: false,
            commits_url:
              'https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213/commits',
            review_comments_url:
              'https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213/comments',
            review_comment_url:
              'https://api.github.com/repos/ruffle-rs/ruffle/pulls/comments{/number}',
            comments_url:
              'https://api.github.com/repos/ruffle-rs/ruffle/issues/3213/comments',
            statuses_url:
              'https://api.github.com/repos/ruffle-rs/ruffle/statuses/f563431032838c08537f810fbc3e61d08d1f1537',
            head: {
              label: 'EmperorBale:bytearray',
              ref: 'bytearray',
              sha: 'f563431032838c08537f810fbc3e61d08d1f1537',
              user: {
                login: 'EmperorBale',
                id: 37880918,
                node_id: 'MDQ6VXNlcjM3ODgwOTE4',
                avatar_url:
                  'https://avatars.githubusercontent.com/u/37880918?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/EmperorBale',
                html_url: 'https://github.com/EmperorBale',
                followers_url:
                  'https://api.github.com/users/EmperorBale/followers',
                following_url:
                  'https://api.github.com/users/EmperorBale/following{/other_user}',
                gists_url:
                  'https://api.github.com/users/EmperorBale/gists{/gist_id}',
                starred_url:
                  'https://api.github.com/users/EmperorBale/starred{/owner}{/repo}',
                subscriptions_url:
                  'https://api.github.com/users/EmperorBale/subscriptions',
                organizations_url:
                  'https://api.github.com/users/EmperorBale/orgs',
                repos_url: 'https://api.github.com/users/EmperorBale/repos',
                events_url:
                  'https://api.github.com/users/EmperorBale/events{/privacy}',
                received_events_url:
                  'https://api.github.com/users/EmperorBale/received_events',
                type: 'User',
                site_admin: false,
              },
              repo: {
                id: 334845480,
                node_id: 'MDEwOlJlcG9zaXRvcnkzMzQ4NDU0ODA=',
                name: 'ruffle',
                full_name: 'EmperorBale/ruffle',
                private: false,
                owner: {
                  login: 'EmperorBale',
                  id: 37880918,
                  node_id: 'MDQ6VXNlcjM3ODgwOTE4',
                  avatar_url:
                    'https://avatars.githubusercontent.com/u/37880918?v=4',
                  gravatar_id: '',
                  url: 'https://api.github.com/users/EmperorBale',
                  html_url: 'https://github.com/EmperorBale',
                  followers_url:
                    'https://api.github.com/users/EmperorBale/followers',
                  following_url:
                    'https://api.github.com/users/EmperorBale/following{/other_user}',
                  gists_url:
                    'https://api.github.com/users/EmperorBale/gists{/gist_id}',
                  starred_url:
                    'https://api.github.com/users/EmperorBale/starred{/owner}{/repo}',
                  subscriptions_url:
                    'https://api.github.com/users/EmperorBale/subscriptions',
                  organizations_url:
                    'https://api.github.com/users/EmperorBale/orgs',
                  repos_url: 'https://api.github.com/users/EmperorBale/repos',
                  events_url:
                    'https://api.github.com/users/EmperorBale/events{/privacy}',
                  received_events_url:
                    'https://api.github.com/users/EmperorBale/received_events',
                  type: 'User',
                  site_admin: false,
                },
                html_url: 'https://github.com/EmperorBale/ruffle',
                description: 'A Flash Player emulator written in Rust',
                fork: true,
                url: 'https://api.github.com/repos/EmperorBale/ruffle',
                forks_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/forks',
                keys_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/keys{/key_id}',
                collaborators_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/collaborators{/collaborator}',
                teams_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/teams',
                hooks_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/hooks',
                issue_events_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/issues/events{/number}',
                events_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/events',
                assignees_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/assignees{/user}',
                branches_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/branches{/branch}',
                tags_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/tags',
                blobs_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/git/blobs{/sha}',
                git_tags_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/git/tags{/sha}',
                git_refs_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/git/refs{/sha}',
                trees_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/git/trees{/sha}',
                statuses_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/statuses/{sha}',
                languages_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/languages',
                stargazers_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/stargazers',
                contributors_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/contributors',
                subscribers_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/subscribers',
                subscription_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/subscription',
                commits_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/commits{/sha}',
                git_commits_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/git/commits{/sha}',
                comments_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/comments{/number}',
                issue_comment_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/issues/comments{/number}',
                contents_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/contents/{+path}',
                compare_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/compare/{base}...{head}',
                merges_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/merges',
                archive_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/{archive_format}{/ref}',
                downloads_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/downloads',
                issues_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/issues{/number}',
                pulls_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/pulls{/number}',
                milestones_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/milestones{/number}',
                notifications_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/notifications{?since,all,participating}',
                labels_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/labels{/name}',
                releases_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/releases{/id}',
                deployments_url:
                  'https://api.github.com/repos/EmperorBale/ruffle/deployments',
                created_at: '2021-02-01T05:53:42Z',
                updated_at: '2021-02-01T05:53:44Z',
                pushed_at: '2021-02-13T02:13:03Z',
                git_url: 'git://github.com/EmperorBale/ruffle.git',
                ssh_url: 'git@github.com:EmperorBale/ruffle.git',
                clone_url: 'https://github.com/EmperorBale/ruffle.git',
                svn_url: 'https://github.com/EmperorBale/ruffle',
                homepage: 'https://ruffle.rs',
                size: 18281,
                stargazers_count: 0,
                watchers_count: 0,
                language: null,
                has_issues: false,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                forks_count: 0,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 0,
                license: {
                  key: 'other',
                  name: 'Other',
                  spdx_id: 'NOASSERTION',
                  url: null,
                  node_id: 'MDc6TGljZW5zZTA=',
                },
                forks: 0,
                open_issues: 0,
                watchers: 0,
                default_branch: 'master',
              },
            },
            base: {
              label: 'ruffle-rs:master',
              ref: 'master',
              sha: 'da86f7fc5afbe93c8b378366c550a0622f59d5b6',
              user: {
                login: 'ruffle-rs',
                id: 50037962,
                node_id: 'MDEyOk9yZ2FuaXphdGlvbjUwMDM3OTYy',
                avatar_url:
                  'https://avatars.githubusercontent.com/u/50037962?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/ruffle-rs',
                html_url: 'https://github.com/ruffle-rs',
                followers_url:
                  'https://api.github.com/users/ruffle-rs/followers',
                following_url:
                  'https://api.github.com/users/ruffle-rs/following{/other_user}',
                gists_url:
                  'https://api.github.com/users/ruffle-rs/gists{/gist_id}',
                starred_url:
                  'https://api.github.com/users/ruffle-rs/starred{/owner}{/repo}',
                subscriptions_url:
                  'https://api.github.com/users/ruffle-rs/subscriptions',
                organizations_url:
                  'https://api.github.com/users/ruffle-rs/orgs',
                repos_url: 'https://api.github.com/users/ruffle-rs/repos',
                events_url:
                  'https://api.github.com/users/ruffle-rs/events{/privacy}',
                received_events_url:
                  'https://api.github.com/users/ruffle-rs/received_events',
                type: 'Organization',
                site_admin: false,
              },
              repo: {
                id: 183483988,
                node_id: 'MDEwOlJlcG9zaXRvcnkxODM0ODM5ODg=',
                name: 'ruffle',
                full_name: 'ruffle-rs/ruffle',
                private: false,
                owner: {
                  login: 'ruffle-rs',
                  id: 50037962,
                  node_id: 'MDEyOk9yZ2FuaXphdGlvbjUwMDM3OTYy',
                  avatar_url:
                    'https://avatars.githubusercontent.com/u/50037962?v=4',
                  gravatar_id: '',
                  url: 'https://api.github.com/users/ruffle-rs',
                  html_url: 'https://github.com/ruffle-rs',
                  followers_url:
                    'https://api.github.com/users/ruffle-rs/followers',
                  following_url:
                    'https://api.github.com/users/ruffle-rs/following{/other_user}',
                  gists_url:
                    'https://api.github.com/users/ruffle-rs/gists{/gist_id}',
                  starred_url:
                    'https://api.github.com/users/ruffle-rs/starred{/owner}{/repo}',
                  subscriptions_url:
                    'https://api.github.com/users/ruffle-rs/subscriptions',
                  organizations_url:
                    'https://api.github.com/users/ruffle-rs/orgs',
                  repos_url: 'https://api.github.com/users/ruffle-rs/repos',
                  events_url:
                    'https://api.github.com/users/ruffle-rs/events{/privacy}',
                  received_events_url:
                    'https://api.github.com/users/ruffle-rs/received_events',
                  type: 'Organization',
                  site_admin: false,
                },
                html_url: 'https://github.com/ruffle-rs/ruffle',
                description: 'A Flash Player emulator written in Rust',
                fork: false,
                url: 'https://api.github.com/repos/ruffle-rs/ruffle',
                forks_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/forks',
                keys_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/keys{/key_id}',
                collaborators_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/collaborators{/collaborator}',
                teams_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/teams',
                hooks_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/hooks',
                issue_events_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/issues/events{/number}',
                events_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/events',
                assignees_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/assignees{/user}',
                branches_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/branches{/branch}',
                tags_url: 'https://api.github.com/repos/ruffle-rs/ruffle/tags',
                blobs_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/git/blobs{/sha}',
                git_tags_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/git/tags{/sha}',
                git_refs_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/git/refs{/sha}',
                trees_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/git/trees{/sha}',
                statuses_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/statuses/{sha}',
                languages_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/languages',
                stargazers_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/stargazers',
                contributors_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/contributors',
                subscribers_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/subscribers',
                subscription_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/subscription',
                commits_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/commits{/sha}',
                git_commits_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/git/commits{/sha}',
                comments_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/comments{/number}',
                issue_comment_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/issues/comments{/number}',
                contents_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/contents/{+path}',
                compare_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/compare/{base}...{head}',
                merges_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/merges',
                archive_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/{archive_format}{/ref}',
                downloads_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/downloads',
                issues_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/issues{/number}',
                pulls_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/pulls{/number}',
                milestones_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/milestones{/number}',
                notifications_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/notifications{?since,all,participating}',
                labels_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/labels{/name}',
                releases_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/releases{/id}',
                deployments_url:
                  'https://api.github.com/repos/ruffle-rs/ruffle/deployments',
                created_at: '2019-04-25T17:53:32Z',
                updated_at: '2021-02-13T04:50:27Z',
                pushed_at: '2021-02-13T02:13:04Z',
                git_url: 'git://github.com/ruffle-rs/ruffle.git',
                ssh_url: 'git@github.com:ruffle-rs/ruffle.git',
                clone_url: 'https://github.com/ruffle-rs/ruffle.git',
                svn_url: 'https://github.com/ruffle-rs/ruffle',
                homepage: 'https://ruffle.rs',
                size: 18385,
                stargazers_count: 7089,
                watchers_count: 7089,
                language: 'Rust',
                has_issues: true,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                forks_count: 252,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 901,
                license: {
                  key: 'other',
                  name: 'Other',
                  spdx_id: 'NOASSERTION',
                  url: null,
                  node_id: 'MDc6TGljZW5zZTA=',
                },
                forks: 252,
                open_issues: 901,
                watchers: 7089,
                default_branch: 'master',
              },
            },
            _links: {
              self: {
                href:
                  'https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213',
              },
              html: { href: 'https://github.com/ruffle-rs/ruffle/pull/3213' },
              issue: {
                href:
                  'https://api.github.com/repos/ruffle-rs/ruffle/issues/3213',
              },
              comments: {
                href:
                  'https://api.github.com/repos/ruffle-rs/ruffle/issues/3213/comments',
              },
              review_comments: {
                href:
                  'https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213/comments',
              },
              review_comment: {
                href:
                  'https://api.github.com/repos/ruffle-rs/ruffle/pulls/comments{/number}',
              },
              commits: {
                href:
                  'https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213/commits',
              },
              statuses: {
                href:
                  'https://api.github.com/repos/ruffle-rs/ruffle/statuses/f563431032838c08537f810fbc3e61d08d1f1537',
              },
            },
            author_association: 'CONTRIBUTOR',
            auto_merge: null,
            active_lock_reason: null,
          },
        },
        public: true,
        created_at: '2021-02-13T05:38:31Z',
        org: {
          id: 50037962,
          login: 'ruffle-rs',
          gravatar_id: '',
          url: 'https://api.github.com/orgs/ruffle-rs',
          avatar_url: 'https://avatars.githubusercontent.com/u/50037962?',
        },
      },
    ],
  },
];

// PullRequestReviewCommentEventTests["testEvents"]["created"] = [
//   {
//     resultingPropSets: 1,
//     testStrings: {
//       summary: {
//         plain:
//           "paq added a comment 575624667 on pull request avm2: Implement ByteArray in ruffle-rs/ruffle",
//         md:
//           "[paq](https://github.com/paq) added a comment [575624667](https://github.com/ruffle-rs/ruffle/pull/3213#discussion_r575624667) on pull request [avm2: Implement ByteArray](https://github.com/ruffle-rs/ruffle/pull/3213) in [ruffle-rs/ruffle](https://github.com/ruffle-rs/ruffle)",
//       },
//       actionTypes: ["created"],
//       verbs: ["created"],
//       actor: {
//         plain: "paq added",
//         md: "[paq](https://github.com/paq) added",
//       },
//       result: "a comment",
//       subject: {
//         plain: [
//           [
//             "575624667",
//             'It seems that `coerce_to_string` is necessary here as well.\r\n\r\nTest code\r\n```as\r\nimport flash.utils.ByteArray;\r\nimport flash.utils.Endian;\r\n\r\nclass A {\r\n    public function A() {}\r\n    public function toString():String {\r\n        return "shift-jis";\r\n    }\r\n}\r\n\r\nvar test = new ByteArray();\r\ntest.writeMultiByte("次", new A());\r\ntest.position = 0;\r\ntrace(test.readMultiByte(2, "shift-jis"));\r\n```\r\n\r\nFlash player prints `次`.\r\nRuffle prints `谺`.\r\n',
//           ],
//         ],
//         md: [
//           [
//             "[575624667](https://github.com/ruffle-rs/ruffle/pull/3213#discussion_r575624667)",
//             'It seems that `coerce_to_string` is necessary here as well.\r\n\r\nTest code\r\n```as\r\nimport flash.utils.ByteArray;\r\nimport flash.utils.Endian;\r\n\r\nclass A {\r\n    public function A() {}\r\n    public function toString():String {\r\n        return "shift-jis";\r\n    }\r\n}\r\n\r\nvar test = new ByteArray();\r\ntest.writeMultiByte("次", new A());\r\ntest.position = 0;\r\ntrace(test.readMultiByte(2, "shift-jis"));\r\n```\r\n\r\nFlash player prints `次`.\r\nRuffle prints `谺`.\r\n',
//           ],
//         ],
//       },
//       target: {
//         plain: [["on pull request avm2: Implement ByteArray"]],
//         md: [
//           [
//             "on pull request [avm2: Implement ByteArray](https://github.com/ruffle-rs/ruffle/pull/3213)",
//           ],
//         ],
//       },
//       parent: {
//         plain: [["in ruffle-rs/ruffle"]],
//         md: [["in [ruffle-rs/ruffle](https://github.com/ruffle-rs/ruffle)"]],
//       },
//     },
//     event: {
//       id: "15171845994",
//       type: "PullRequestReviewCommentEvent",
//       actor: {
//         id: 218905,
//         login: "paq",
//         display_login: "paq",
//         gravatar_id: "",
//         url: "https://api.github.com/users/paq",
//         avatar_url: "https://avatars.githubusercontent.com/u/218905?",
//       },
//       repo: {
//         id: 183483988,
//         name: "ruffle-rs/ruffle",
//         url: "https://api.github.com/repos/ruffle-rs/ruffle",
//       },
//       payload: {
//         action: "created",
//         comment: {
//           url:
//             "https://api.github.com/repos/ruffle-rs/ruffle/pulls/comments/575624667",
//           pull_request_review_id: 589945590,
//           id: 575624667,
//           node_id: "MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDU3NTYyNDY2Nw==",
//           diff_hunk:
//             "@@ -0,0 +1,939 @@\n+use crate::avm2::activation::Activation;\n+use crate::avm2::bytearray::Endian;\n+use crate::avm2::class::Class;\n+use crate::avm2::method::Method;\n+use crate::avm2::names::{Namespace, QName};\n+use crate::avm2::object::{Object, TObject};\n+use crate::avm2::string::AvmString;\n+use crate::avm2::traits::Trait;\n+use crate::avm2::value::Value;\n+use crate::avm2::Error;\n+use encoding_rs::Encoding;\n+use encoding_rs::UTF_8;\n+use gc_arena::{GcCell, MutationContext};\n+\n+/// Implements `flash.utils.ByteArray`'s instance constructor.\n+pub fn instance_init<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(this) = this {\n+        activation.super_init(this, &[])?;\n+    }\n+\n+    Ok(Value::Undefined)\n+}\n+\n+/// Implements `flash.utils.ByteArray`'s class constructor.\n+pub fn class_init<'gc>(\n+    _activation: &mut Activation<'_, 'gc, '_>,\n+    _this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    Ok(Value::Undefined)\n+}\n+\n+/// Writes a single byte to the bytearray\n+pub fn write_byte<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let byte = args\n+            .get(0)\n+            .cloned()\n+            .unwrap_or(Value::Undefined)\n+            .coerce_to_i32(activation)?;\n+        bytearray.write_byte(byte as u8);\n+    }\n+\n+    Ok(Value::Undefined)\n+}\n+\n+/// Writes multiple bytes to the bytearray from another bytearray\n+pub fn write_bytes<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(Value::Object(second_array)) = args.get(0) {\n+        let combining_storage = second_array.as_bytearray().unwrap().reborrow();\n+        let combining_bytes = combining_storage.bytes();\n+        let offset = args\n+            .get(1)\n+            .unwrap_or(&Value::Unsigned(0))\n+            .coerce_to_u32(activation)? as usize;\n+        let length = args\n+            .get(2)\n+            .unwrap_or(&Value::Unsigned(0))\n+            .coerce_to_u32(activation)? as usize;\n+\n+        // In the docs it says \"If offset or length is out of range, they are clamped to the beginning and end of the bytes array.\"\n+        // However, in the actual flash player, it seems to just raise an error.\n+        if offset + length > combining_bytes.len() {\n+            log::error!(\"ByteArray: Reached EOF\");\n+            return Ok(Value::Undefined);\n+        }\n+\n+        if let Some(mut bytearray) = this\n+            .unwrap()\n+            .as_bytearray_mut(activation.context.gc_context)\n+        {\n+            bytearray.write_bytes(if length != 0 {\n+                &combining_bytes[offset..length + offset]\n+            } else {\n+                &combining_bytes[offset..]\n+            });\n+        }\n+    }\n+\n+    Ok(Value::Undefined)\n+}\n+\n+// Reads the bytes from the current bytearray into another bytearray\n+pub fn read_bytes<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    let mut merging_buffer: Vec<u8> = Vec::new();\n+    let mut offset = 0;\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let combining_bytes = bytearray.bytes();\n+        offset = args\n+            .get(1)\n+            .unwrap_or(&Value::Unsigned(0))\n+            .coerce_to_u32(activation)? as usize;\n+        let length = args\n+            .get(2)\n+            .unwrap_or(&Value::Unsigned(0))\n+            .coerce_to_u32(activation)? as usize;\n+\n+        if bytearray.position() + length > combining_bytes.len() {\n+            log::error!(\"ByteArray: Reached EOF\");\n+            return Ok(Value::Undefined);\n+        }\n+\n+        merging_buffer = if length != 0 {\n+            combining_bytes[bytearray.position()..length + bytearray.position()].to_vec()\n+        } else {\n+            combining_bytes[bytearray.position()..].to_vec()\n+        };\n+        {\n+            bytearray.add_position(merging_buffer.len());\n+        }\n+    }\n+    // We borrow the 2 bytearrays seperately in case they are trying to add 2 of the same bytearrays together (would panic otherwise)\n+    if let Some(Value::Object(second_array)) = args.get(0) {\n+        let mut merging_storage = second_array\n+            .as_bytearray_mut(activation.context.gc_context)\n+            .unwrap();\n+        // Offset should not be greater then the buffer\n+        if merging_storage.bytes().len() < offset {\n+            return Ok(Value::Undefined);\n+        }\n+        merging_storage.write_bytes_at(&merging_buffer, offset);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_utf<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Some(utf_string) = args.get(0) {\n+            let utf_string = utf_string.coerce_to_string(activation)?;\n+            bytearray.write_utf(&utf_string.as_str());\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_utf<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(utf_string) = bytearray.read_utf() {\n+            return Ok(AvmString::new(activation.context.gc_context, utf_string).into());\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+pub fn to_string<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(bytearray) = this.unwrap().as_bytearray() {\n+        let bytes = bytearray.bytes();\n+        let (new_string, _, _) = UTF_8.decode(bytes);\n+        return Ok(AvmString::new(activation.context.gc_context, new_string).into());\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn clear<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        bytearray.clear();\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn position<'gc>(\n+    _activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(bytearray) = this.unwrap().as_bytearray() {\n+        return Ok(Value::Unsigned(bytearray.position() as u32));\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn set_position<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args\n+            .get(0)\n+            .unwrap_or(&Value::Integer(0))\n+            .coerce_to_u32(activation)?;\n+        bytearray.set_position(num as usize);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn bytes_available<'gc>(\n+    _activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(bytearray) = this.unwrap().as_bytearray() {\n+        return Ok(Value::Unsigned(\n+            if bytearray.position() > bytearray.bytes().len() {\n+                0\n+            } else {\n+                (bytearray.bytes().len() - bytearray.position()) as u32\n+            },\n+        ));\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn bytes_length<'gc>(\n+    _activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(bytearray) = this.unwrap().as_bytearray() {\n+        return Ok(Value::Unsigned(bytearray.bytes().len() as u32));\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn set_bytes_length<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let len = args\n+            .get(0)\n+            .unwrap_or(&Value::Unsigned(0))\n+            .coerce_to_u32(activation)\n+            .unwrap() as usize;\n+        bytearray.resize(len);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn endian<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(bytearray) = this.unwrap().as_bytearray() {\n+        return Ok(match bytearray.endian() {\n+            Endian::Big => AvmString::new(activation.context.gc_context, \"bigEndian\").into(),\n+            Endian::Little => AvmString::new(activation.context.gc_context, \"littleEndian\").into(),\n+        });\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn set_endian<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        match args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_string(activation)?\n+            .as_str()\n+        {\n+            \"bigEndian\" => bytearray.set_endian(Endian::Big),\n+            \"littleEndian\" => bytearray.set_endian(Endian::Little),\n+            _ => log::error!(\"Parameter type must be one of the accepted values.\"),\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_short<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_short() {\n+            return Ok(Value::Integer(num as i32));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_unsigned_short<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_unsigned_short() {\n+            return Ok(Value::Unsigned(num as u32));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_double<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_double() {\n+            return Ok(Value::Number(num));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_float<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_float() {\n+            return Ok(Value::Number(num as f64));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_int<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_int() {\n+            return Ok(Value::Integer(num));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_unsigned_int<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_unsigned_int() {\n+            return Ok(Value::Unsigned(num));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_boolean<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_boolean() {\n+            return Ok(Value::Bool(num));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_byte<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_byte() {\n+            return Ok(Value::Integer(num as i32));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_utf_bytes<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Some(Value::Integer(len)) = args.get(0) {\n+            if *len < 0 {\n+                log::error!(\"ByteArray: Did not get proper length\");\n+                return Ok(Value::Undefined);\n+            }\n+            if let Ok(bytes) = bytearray.read_exactly(*len as usize) {\n+                return Ok(AvmString::new(\n+                    activation.context.gc_context,\n+                    String::from_utf8_lossy(&bytes),\n+                )\n+                .into());\n+            }\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn read_unsigned_byte<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    _args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        if let Ok(num) = bytearray.read_unsigned_byte() {\n+            return Ok(Value::Unsigned(num as u32));\n+        }\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_float<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_number(activation)?;\n+        bytearray.write_float(num as f32);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_double<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_number(activation)?;\n+        bytearray.write_double(num);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_boolean<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args.get(0).unwrap_or(&Value::Undefined).coerce_to_boolean();\n+        bytearray.write_boolean(num);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_int<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_i32(activation)?;\n+        bytearray.write_int(num);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_unsigned_int<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_u32(activation)?;\n+        bytearray.write_unsigned_int(num);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_short<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let num = args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_i32(activation)?;\n+        bytearray.write_short(num as i16);\n+    }\n+    Ok(Value::Undefined)\n+}\n+\n+pub fn write_multibyte<'gc>(\n+    activation: &mut Activation<'_, 'gc, '_>,\n+    this: Option<Object<'gc>>,\n+    args: &[Value<'gc>],\n+) -> Result<Value<'gc>, Error> {\n+    if let Some(mut bytearray) = this\n+        .unwrap()\n+        .as_bytearray_mut(activation.context.gc_context)\n+    {\n+        let string = args\n+            .get(0)\n+            .unwrap_or(&Value::Undefined)\n+            .coerce_to_string(activation)?;\n+        let mut charset_label = \"utf-8\";\n+        if let Some(Value::String(charset)) = args.get(1) {\n+            charset_label = charset;\n+        }",
//           path: "core/src/avm2/globals/flash/utils/bytearray.rs",
//           position: 611,
//           original_position: 611,
//           commit_id: "f563431032838c08537f810fbc3e61d08d1f1537",
//           original_commit_id: "f563431032838c08537f810fbc3e61d08d1f1537",
//           user: {
//             login: "paq",
//             id: 218905,
//             node_id: "MDQ6VXNlcjIxODkwNQ==",
//             avatar_url: "https://avatars.githubusercontent.com/u/218905?v=4",
//             gravatar_id: "",
//             url: "https://api.github.com/users/paq",
//             html_url: "https://github.com/paq",
//             followers_url: "https://api.github.com/users/paq/followers",
//             following_url:
//               "https://api.github.com/users/paq/following{/other_user}",
//             gists_url: "https://api.github.com/users/paq/gists{/gist_id}",
//             starred_url:
//               "https://api.github.com/users/paq/starred{/owner}{/repo}",
//             subscriptions_url: "https://api.github.com/users/paq/subscriptions",
//             organizations_url: "https://api.github.com/users/paq/orgs",
//             repos_url: "https://api.github.com/users/paq/repos",
//             events_url: "https://api.github.com/users/paq/events{/privacy}",
//             received_events_url:
//               "https://api.github.com/users/paq/received_events",
//             type: "User",
//             site_admin: false,
//           },
//           body:
//             'It seems that `coerce_to_string` is necessary here as well.\r\n\r\nTest code\r\n```as\r\nimport flash.utils.ByteArray;\r\nimport flash.utils.Endian;\r\n\r\nclass A {\r\n    public function A() {}\r\n    public function toString():String {\r\n        return "shift-jis";\r\n    }\r\n}\r\n\r\nvar test = new ByteArray();\r\ntest.writeMultiByte("次", new A());\r\ntest.position = 0;\r\ntrace(test.readMultiByte(2, "shift-jis"));\r\n```\r\n\r\nFlash player prints `次`.\r\nRuffle prints `谺`.\r\n',
//           created_at: "2021-02-13T05:38:31Z",
//           updated_at: "2021-02-13T05:38:32Z",
//           html_url:
//             "https://github.com/ruffle-rs/ruffle/pull/3213#discussion_r575624667",
//           pull_request_url:
//             "https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213",
//           author_association: "CONTRIBUTOR",
//           _links: {
//             self: {
//               href:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/pulls/comments/575624667",
//             },
//             html: {
//               href:
//                 "https://github.com/ruffle-rs/ruffle/pull/3213#discussion_r575624667",
//             },
//             pull_request: {
//               href: "https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213",
//             },
//           },
//           start_line: 609,
//           original_start_line: 609,
//           start_side: "RIGHT",
//           line: 611,
//           original_line: 611,
//           side: "RIGHT",
//         },
//         pull_request: {
//           url: "https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213",
//           id: 572153821,
//           node_id: "MDExOlB1bGxSZXF1ZXN0NTcyMTUzODIx",
//           html_url: "https://github.com/ruffle-rs/ruffle/pull/3213",
//           diff_url: "https://github.com/ruffle-rs/ruffle/pull/3213.diff",
//           patch_url: "https://github.com/ruffle-rs/ruffle/pull/3213.patch",
//           issue_url:
//             "https://api.github.com/repos/ruffle-rs/ruffle/issues/3213",
//           number: 3213,
//           state: "open",
//           locked: false,
//           title: "avm2: Implement ByteArray",
//           user: {
//             login: "EmperorBale",
//             id: 37880918,
//             node_id: "MDQ6VXNlcjM3ODgwOTE4",
//             avatar_url: "https://avatars.githubusercontent.com/u/37880918?v=4",
//             gravatar_id: "",
//             url: "https://api.github.com/users/EmperorBale",
//             html_url: "https://github.com/EmperorBale",
//             followers_url: "https://api.github.com/users/EmperorBale/followers",
//             following_url:
//               "https://api.github.com/users/EmperorBale/following{/other_user}",
//             gists_url:
//               "https://api.github.com/users/EmperorBale/gists{/gist_id}",
//             starred_url:
//               "https://api.github.com/users/EmperorBale/starred{/owner}{/repo}",
//             subscriptions_url:
//               "https://api.github.com/users/EmperorBale/subscriptions",
//             organizations_url: "https://api.github.com/users/EmperorBale/orgs",
//             repos_url: "https://api.github.com/users/EmperorBale/repos",
//             events_url:
//               "https://api.github.com/users/EmperorBale/events{/privacy}",
//             received_events_url:
//               "https://api.github.com/users/EmperorBale/received_events",
//             type: "User",
//             site_admin: false,
//           },
//           body:
//             "This PR implements flash.utils.ByteArray, and also flash.utils.Endian (which just has 2 constants)\r\n\r\nIn the ByteArray, the following properties are not implemented yet:\r\n\r\n- ByteArray.shareable\r\n- ByteArray.objectEncoding\r\n- ByteArray.defaultObjectEncoding\r\n\r\nAnd the following methods are not implemented yet:\r\n\r\n- ByteArray.atomicCompareAndSwapIntAt()\r\n- ByteArray.atomicCompareAndSwapLength()\r\n- ByteArray.readObject()\r\n- ByteArray.writeObject()\r\n- ByteArray.toJSON()\n\nCompression is working, but I haven't added support for lzma.",
//           created_at: "2021-02-11T22:29:49Z",
//           updated_at: "2021-02-13T05:38:32Z",
//           closed_at: null,
//           merged_at: null,
//           merge_commit_sha: "54084be4215e6efa75fad83bde85268fa8c0c595",
//           assignee: null,
//           assignees: [],
//           requested_reviewers: [],
//           requested_teams: [],
//           labels: [],
//           milestone: null,
//           draft: false,
//           commits_url:
//             "https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213/commits",
//           review_comments_url:
//             "https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213/comments",
//           review_comment_url:
//             "https://api.github.com/repos/ruffle-rs/ruffle/pulls/comments{/number}",
//           comments_url:
//             "https://api.github.com/repos/ruffle-rs/ruffle/issues/3213/comments",
//           statuses_url:
//             "https://api.github.com/repos/ruffle-rs/ruffle/statuses/f563431032838c08537f810fbc3e61d08d1f1537",
//           head: {
//             label: "EmperorBale:bytearray",
//             ref: "bytearray",
//             sha: "f563431032838c08537f810fbc3e61d08d1f1537",
//             user: {
//               login: "EmperorBale",
//               id: 37880918,
//               node_id: "MDQ6VXNlcjM3ODgwOTE4",
//               avatar_url:
//                 "https://avatars.githubusercontent.com/u/37880918?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/EmperorBale",
//               html_url: "https://github.com/EmperorBale",
//               followers_url:
//                 "https://api.github.com/users/EmperorBale/followers",
//               following_url:
//                 "https://api.github.com/users/EmperorBale/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/EmperorBale/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/EmperorBale/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/EmperorBale/subscriptions",
//               organizations_url:
//                 "https://api.github.com/users/EmperorBale/orgs",
//               repos_url: "https://api.github.com/users/EmperorBale/repos",
//               events_url:
//                 "https://api.github.com/users/EmperorBale/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/EmperorBale/received_events",
//               type: "User",
//               site_admin: false,
//             },
//             repo: {
//               id: 334845480,
//               node_id: "MDEwOlJlcG9zaXRvcnkzMzQ4NDU0ODA=",
//               name: "ruffle",
//               full_name: "EmperorBale/ruffle",
//               private: false,
//               owner: {
//                 login: "EmperorBale",
//                 id: 37880918,
//                 node_id: "MDQ6VXNlcjM3ODgwOTE4",
//                 avatar_url:
//                   "https://avatars.githubusercontent.com/u/37880918?v=4",
//                 gravatar_id: "",
//                 url: "https://api.github.com/users/EmperorBale",
//                 html_url: "https://github.com/EmperorBale",
//                 followers_url:
//                   "https://api.github.com/users/EmperorBale/followers",
//                 following_url:
//                   "https://api.github.com/users/EmperorBale/following{/other_user}",
//                 gists_url:
//                   "https://api.github.com/users/EmperorBale/gists{/gist_id}",
//                 starred_url:
//                   "https://api.github.com/users/EmperorBale/starred{/owner}{/repo}",
//                 subscriptions_url:
//                   "https://api.github.com/users/EmperorBale/subscriptions",
//                 organizations_url:
//                   "https://api.github.com/users/EmperorBale/orgs",
//                 repos_url: "https://api.github.com/users/EmperorBale/repos",
//                 events_url:
//                   "https://api.github.com/users/EmperorBale/events{/privacy}",
//                 received_events_url:
//                   "https://api.github.com/users/EmperorBale/received_events",
//                 type: "User",
//                 site_admin: false,
//               },
//               html_url: "https://github.com/EmperorBale/ruffle",
//               description: "A Flash Player emulator written in Rust",
//               fork: true,
//               url: "https://api.github.com/repos/EmperorBale/ruffle",
//               forks_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/forks",
//               keys_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/keys{/key_id}",
//               collaborators_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/collaborators{/collaborator}",
//               teams_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/teams",
//               hooks_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/hooks",
//               issue_events_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/issues/events{/number}",
//               events_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/events",
//               assignees_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/assignees{/user}",
//               branches_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/branches{/branch}",
//               tags_url: "https://api.github.com/repos/EmperorBale/ruffle/tags",
//               blobs_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/git/blobs{/sha}",
//               git_tags_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/git/tags{/sha}",
//               git_refs_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/git/refs{/sha}",
//               trees_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/git/trees{/sha}",
//               statuses_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/statuses/{sha}",
//               languages_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/languages",
//               stargazers_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/stargazers",
//               contributors_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/contributors",
//               subscribers_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/subscribers",
//               subscription_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/subscription",
//               commits_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/commits{/sha}",
//               git_commits_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/git/commits{/sha}",
//               comments_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/comments{/number}",
//               issue_comment_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/issues/comments{/number}",
//               contents_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/contents/{+path}",
//               compare_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/compare/{base}...{head}",
//               merges_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/merges",
//               archive_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/{archive_format}{/ref}",
//               downloads_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/downloads",
//               issues_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/issues{/number}",
//               pulls_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/pulls{/number}",
//               milestones_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/milestones{/number}",
//               notifications_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/notifications{?since,all,participating}",
//               labels_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/labels{/name}",
//               releases_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/releases{/id}",
//               deployments_url:
//                 "https://api.github.com/repos/EmperorBale/ruffle/deployments",
//               created_at: "2021-02-01T05:53:42Z",
//               updated_at: "2021-02-01T05:53:44Z",
//               pushed_at: "2021-02-13T02:13:03Z",
//               git_url: "git://github.com/EmperorBale/ruffle.git",
//               ssh_url: "git@github.com:EmperorBale/ruffle.git",
//               clone_url: "https://github.com/EmperorBale/ruffle.git",
//               svn_url: "https://github.com/EmperorBale/ruffle",
//               homepage: "https://ruffle.rs",
//               size: 18281,
//               stargazers_count: 0,
//               watchers_count: 0,
//               language: null,
//               has_issues: false,
//               has_projects: true,
//               has_downloads: true,
//               has_wiki: true,
//               has_pages: false,
//               forks_count: 0,
//               mirror_url: null,
//               archived: false,
//               disabled: false,
//               open_issues_count: 0,
//               license: {
//                 key: "other",
//                 name: "Other",
//                 spdx_id: "NOASSERTION",
//                 url: null,
//                 node_id: "MDc6TGljZW5zZTA=",
//               },
//               forks: 0,
//               open_issues: 0,
//               watchers: 0,
//               default_branch: "master",
//             },
//           },
//           base: {
//             label: "ruffle-rs:master",
//             ref: "master",
//             sha: "da86f7fc5afbe93c8b378366c550a0622f59d5b6",
//             user: {
//               login: "ruffle-rs",
//               id: 50037962,
//               node_id: "MDEyOk9yZ2FuaXphdGlvbjUwMDM3OTYy",
//               avatar_url:
//                 "https://avatars.githubusercontent.com/u/50037962?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/ruffle-rs",
//               html_url: "https://github.com/ruffle-rs",
//               followers_url: "https://api.github.com/users/ruffle-rs/followers",
//               following_url:
//                 "https://api.github.com/users/ruffle-rs/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/ruffle-rs/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/ruffle-rs/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/ruffle-rs/subscriptions",
//               organizations_url: "https://api.github.com/users/ruffle-rs/orgs",
//               repos_url: "https://api.github.com/users/ruffle-rs/repos",
//               events_url:
//                 "https://api.github.com/users/ruffle-rs/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/ruffle-rs/received_events",
//               type: "Organization",
//               site_admin: false,
//             },
//             repo: {
//               id: 183483988,
//               node_id: "MDEwOlJlcG9zaXRvcnkxODM0ODM5ODg=",
//               name: "ruffle",
//               full_name: "ruffle-rs/ruffle",
//               private: false,
//               owner: {
//                 login: "ruffle-rs",
//                 id: 50037962,
//                 node_id: "MDEyOk9yZ2FuaXphdGlvbjUwMDM3OTYy",
//                 avatar_url:
//                   "https://avatars.githubusercontent.com/u/50037962?v=4",
//                 gravatar_id: "",
//                 url: "https://api.github.com/users/ruffle-rs",
//                 html_url: "https://github.com/ruffle-rs",
//                 followers_url:
//                   "https://api.github.com/users/ruffle-rs/followers",
//                 following_url:
//                   "https://api.github.com/users/ruffle-rs/following{/other_user}",
//                 gists_url:
//                   "https://api.github.com/users/ruffle-rs/gists{/gist_id}",
//                 starred_url:
//                   "https://api.github.com/users/ruffle-rs/starred{/owner}{/repo}",
//                 subscriptions_url:
//                   "https://api.github.com/users/ruffle-rs/subscriptions",
//                 organizations_url:
//                   "https://api.github.com/users/ruffle-rs/orgs",
//                 repos_url: "https://api.github.com/users/ruffle-rs/repos",
//                 events_url:
//                   "https://api.github.com/users/ruffle-rs/events{/privacy}",
//                 received_events_url:
//                   "https://api.github.com/users/ruffle-rs/received_events",
//                 type: "Organization",
//                 site_admin: false,
//               },
//               html_url: "https://github.com/ruffle-rs/ruffle",
//               description: "A Flash Player emulator written in Rust",
//               fork: false,
//               url: "https://api.github.com/repos/ruffle-rs/ruffle",
//               forks_url: "https://api.github.com/repos/ruffle-rs/ruffle/forks",
//               keys_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/keys{/key_id}",
//               collaborators_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/collaborators{/collaborator}",
//               teams_url: "https://api.github.com/repos/ruffle-rs/ruffle/teams",
//               hooks_url: "https://api.github.com/repos/ruffle-rs/ruffle/hooks",
//               issue_events_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/issues/events{/number}",
//               events_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/events",
//               assignees_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/assignees{/user}",
//               branches_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/branches{/branch}",
//               tags_url: "https://api.github.com/repos/ruffle-rs/ruffle/tags",
//               blobs_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/git/blobs{/sha}",
//               git_tags_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/git/tags{/sha}",
//               git_refs_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/git/refs{/sha}",
//               trees_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/git/trees{/sha}",
//               statuses_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/statuses/{sha}",
//               languages_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/languages",
//               stargazers_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/stargazers",
//               contributors_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/contributors",
//               subscribers_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/subscribers",
//               subscription_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/subscription",
//               commits_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/commits{/sha}",
//               git_commits_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/git/commits{/sha}",
//               comments_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/comments{/number}",
//               issue_comment_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/issues/comments{/number}",
//               contents_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/contents/{+path}",
//               compare_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/compare/{base}...{head}",
//               merges_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/merges",
//               archive_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/{archive_format}{/ref}",
//               downloads_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/downloads",
//               issues_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/issues{/number}",
//               pulls_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/pulls{/number}",
//               milestones_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/milestones{/number}",
//               notifications_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/notifications{?since,all,participating}",
//               labels_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/labels{/name}",
//               releases_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/releases{/id}",
//               deployments_url:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/deployments",
//               created_at: "2019-04-25T17:53:32Z",
//               updated_at: "2021-02-13T04:50:27Z",
//               pushed_at: "2021-02-13T02:13:04Z",
//               git_url: "git://github.com/ruffle-rs/ruffle.git",
//               ssh_url: "git@github.com:ruffle-rs/ruffle.git",
//               clone_url: "https://github.com/ruffle-rs/ruffle.git",
//               svn_url: "https://github.com/ruffle-rs/ruffle",
//               homepage: "https://ruffle.rs",
//               size: 18385,
//               stargazers_count: 7089,
//               watchers_count: 7089,
//               language: "Rust",
//               has_issues: true,
//               has_projects: true,
//               has_downloads: true,
//               has_wiki: true,
//               has_pages: false,
//               forks_count: 252,
//               mirror_url: null,
//               archived: false,
//               disabled: false,
//               open_issues_count: 901,
//               license: {
//                 key: "other",
//                 name: "Other",
//                 spdx_id: "NOASSERTION",
//                 url: null,
//                 node_id: "MDc6TGljZW5zZTA=",
//               },
//               forks: 252,
//               open_issues: 901,
//               watchers: 7089,
//               default_branch: "master",
//             },
//           },
//           _links: {
//             self: {
//               href: "https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213",
//             },
//             html: { href: "https://github.com/ruffle-rs/ruffle/pull/3213" },
//             issue: {
//               href: "https://api.github.com/repos/ruffle-rs/ruffle/issues/3213",
//             },
//             comments: {
//               href:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/issues/3213/comments",
//             },
//             review_comments: {
//               href:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213/comments",
//             },
//             review_comment: {
//               href:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/pulls/comments{/number}",
//             },
//             commits: {
//               href:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/pulls/3213/commits",
//             },
//             statuses: {
//               href:
//                 "https://api.github.com/repos/ruffle-rs/ruffle/statuses/f563431032838c08537f810fbc3e61d08d1f1537",
//             },
//           },
//           author_association: "CONTRIBUTOR",
//           auto_merge: null,
//           active_lock_reason: null,
//         },
//       },
//       public: true,
//       created_at: "2021-02-13T05:38:31Z",
//       org: {
//         id: 50037962,
//         login: "ruffle-rs",
//         gravatar_id: "",
//         url: "https://api.github.com/orgs/ruffle-rs",
//         avatar_url: "https://avatars.githubusercontent.com/u/50037962?",
//       },
//     },
//   },
// ]

export default PullRequestReviewCommentEventTests;
